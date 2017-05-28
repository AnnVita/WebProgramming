#include "stdafx.h"
#include "ServerHandler.h"
#include "Server.h"
#include "Parser.h"

namespace filesystem = std::tr2::sys;

CServerHandler::CServerHandler()
	: CServer()
{

}

bool CServerHandler::Index(const std::string & path) const
{
	return path == ROOT_DIRECTORY || path == CLIENT_INDEX_PAGE;
}

bool CServerHandler::FileStruct(const std::string & path) const
{
	return path == CLIENT_FILES_STRUCTURE;
}

bool CServerHandler::Css(const std::string & path) const
{
	return path.substr(0, 4) == CLIENT_STYLES_DIRECTORY;
}

bool CServerHandler::Scripts(const std::string & path) const
{
	return path.substr(0, 3) == CLIENT_SCRIPTS_DIRECTORY;
}

bool CServerHandler::SpecialDir(const std::string & path) const
{
	return path.substr(0, 6) == SPECIAL_FILE_DIRECTORY;
}

void CServerHandler::StartHandleRequests()
{
	char buffer[MAX_BUFFER_SIZE];
	int clientSocket = INVALID_SOCKET;
	for (;;)
	{
		clientSocket = accept(m_listenSocket, NULL, NULL);
		if (clientSocket == INVALID_SOCKET)
		{
			closesocket(m_listenSocket);
			WSACleanup();
			std::cout << "Accept failed: " << WSAGetLastError() << std::endl;
		}
		int result = recv(clientSocket, buffer, MAX_BUFFER_SIZE, 0);
		std::string response;

		if (result == SOCKET_ERROR)
		{
			closesocket(clientSocket);
			throw std::runtime_error("Receive failed: " + result);
		}
		else if (result > 0)
		{
			response = HandleValidRequests(buffer, result);
			if (send(clientSocket, response.c_str(), response.length(), 0) == SOCKET_ERROR)
			{
				std::cout << "Request send failed: " << WSAGetLastError() << std::endl;
			}
			closesocket(clientSocket);
		}
	}
}

std::string CServerHandler::HandleValidRequests(char buffer[], int res)
{
	std::string result;
	buffer[res] = '\0';
	CRequestParser parser;
	if (parser.Parse(buffer))
	{
		if (parser.GetMethod() == GET_REQUEST)
		{
			result = HandleGetRequest(parser.GetPath());
		}
		if (parser.GetMethod() == DELETE_REQUEST)
		{
			result = HandleDeleteRequest(parser.GetPath());
		}
	}
	else
	{
		if (parser.Parse(buffer))
		{
			std::string responseBody = "Bad request";
			result = CreateResponse(400, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
		}
	}
	return result;
}

std::string CServerHandler::HandleGetRequest(const std::string & path)
{
	std::string response;
	std::string filePath = (path == ROOT_DIRECTORY) ? path : path.substr(1, path.length());
	while (filePath.find("%20") != std::string::npos)
	{
		filePath.replace(filePath.find("%20"), 3, " ");
	}
	filesystem::path file(filePath);
	if (filesystem::exists(file))
	{
		if (Index(filePath))
		{
			response = ContentResponce(TYPE_HTML, filePath);
		}
		else if (FileStruct(filePath))
		{
			response = FileStructureResponce(filePath);
		}
		else if (Css(filePath))
		{
			response = ContentResponce(TYPE_CSS, filePath);
		}
		else if (Scripts(filePath))
		{
			response = ContentResponce(TYPE_JS, filePath);
		}
		else if (SpecialDir(filePath))
		{
			response = FileResponce(filePath);
		}
		else
		{
			std::string responseBody = "Access denied";
			response = CreateResponse(403, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
		}
	}
	else
	{
		std::string responseBody = path + " not found";
		response = CreateResponse(404, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
	}
	return response;
}

std::string CServerHandler::HandleDeleteRequest(const std::string & path)
{
	std::string response;
	std::string responseBody;
	std::string filePath = path.substr(1, path.length());
	while (filePath.find("%20") != std::string::npos)
	{
		filePath.replace(filePath.find("%20"), 3, " ");
	}

	if (SpecialDir(filePath))
	{
		filesystem::path file(filePath);
		if (filesystem::exists(file))
		{
			if (filesystem::is_regular_file(file))
			{
				filesystem::remove(file);
				responseBody = filePath + " was deleted";
				response = CreateResponse(200, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
			}
			else
			{
				responseBody = filePath + " is not a file";
				response = CreateResponse(400, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
			}
		}
		else
		{
			responseBody = filePath + " not found";
			response = CreateResponse(404, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
		}
	}
	else
	{
		responseBody = "Access denied";
		response = CreateResponse(403, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
	}
	return response;
}


void CServerHandler::GetFiles(std::vector<filesystem::path> & files, const filesystem::path & directoryPath)
{
	std::vector<filesystem::path> subFiles((filesystem::directory_iterator(directoryPath)), filesystem::directory_iterator());
	for (auto file : subFiles)
	{
		files.push_back(file);
		if (filesystem::is_directory(file) && !filesystem::is_symlink(file))
		{
			GetFiles(files, file);
		}
	}
}

std::string CServerHandler::GetJsonString(const rapidjson::Document & document)
{
	rapidjson::StringBuffer buffer;
	rapidjson::Writer<rapidjson::StringBuffer> writer(buffer);
	document.Accept(writer);
	return buffer.GetString();
}

std::string CServerHandler::ContentResponce(const std::string & type, const std::string & path)
{
	std::string responseBody;
	std::string fileName = path;
	if ("/" == path)
	{
		fileName = "index.html";
	}
	std::ifstream file(fileName);
	std::string line;
	while (std::getline(file, line))
	{
		responseBody += line;
	}
	return CreateResponse(200, type, CHARSET_UTF8, responseBody);
}

std::string CServerHandler::FileStructureResponce(const std::string & path)
{
	std::string responseBody = DirectoryToJson();
	return CreateResponse(200, TYPE_JSON, CHARSET_WIN1251, responseBody);
}

std::string CServerHandler::FileResponce(const std::string & path)
{
	filesystem::path filePath(path);
	std::string responseBody;
	if (filesystem::file_size(filePath) > MAX_FILE_SIZE)
	{
		responseBody = "file size too large. Max = 50mb";
		return CreateResponse(400, TYPE_PLAIN_TEXT, CHARSET_UTF8, responseBody);
	}

	std::ifstream file(path, std::ios::binary | std::ios::in);

	char buf[512];
	while (file.read(buf, sizeof(buf)).gcount() > 0)
	{
		responseBody.append(buf, file.gcount());
	}
	size_t pos = 0;
	while ((pos = responseBody.find("\r\n", pos)) != std::string::npos)
	{
		responseBody.replace(pos, 2, "<br />");
		++pos;
	}

	std::string extension = filePath.extension().string();
	std::string type = GetContentTypeByExtension(extension);
	std::string charset = "";
	if (".txt" == extension || ".html" == extension || ".css" == extension || ".js" == extension)
	{
		charset = CHARSET_WIN1251;
	}
	return CreateResponse(200, type, charset, responseBody);
}

std::string CServerHandler::GetContentTypeByExtension(const std::string & extension) const
{
	std::string type = BASE_TYPE;
	if (CONTENT.find(extension) != CONTENT.end())
	{
		type = CONTENT.find(extension)->second;
	}
	return type;
}

std::string CServerHandler::DirectoryToJson()
{
	rapidjson::Document document;
	document.SetObject();

	auto& allocator = document.GetAllocator();

	rapidjson::Value key(JSON_ARRAY_KEY, allocator);
	rapidjson::Value elements(rapidjson::kArrayType);

	std::vector<filesystem::path> files;
	GetFiles(files, CLIENT_FILES_STRUCTURE);

	for (auto file : files)
	{
		std::string tmpStr = file.string();
		while (tmpStr.find("\\") != std::string::npos)
		{
			tmpStr.replace(tmpStr.find("\\"), 1, "/");
		}
		rapidjson::Value tmp(tmpStr, allocator);
		elements.PushBack(tmp, allocator);
	}
	document.AddMember(key, elements, allocator);

	return GetJsonString(document);
}
