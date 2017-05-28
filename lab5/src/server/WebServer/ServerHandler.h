#pragma once
#include "Server.h"

class CServerHandler : public CServer
{
public:
	CServerHandler();
	virtual void StartHandleRequests() override;

private:

	std::string HandleGetRequest(const std::string & path);
	std::string HandleDeleteRequest(const std::string & path);

	bool Index(const std::string & path) const;
	bool FileStruct(const std::string & path) const;
	bool Css(const std::string & path) const;
	bool Scripts(const std::string & path) const;
	bool SpecialDir(const std::string & path) const;

	std::string HandleValidRequests(char buffer[], int res);

	std::string ContentResponce(const std::string & type, const std::string & path);
	std::string FileStructureResponce(const std::string & path);
	std::string FileResponce(const std::string & path);

	std::string DirectoryToJson();
	std::string GetJsonString(const rapidjson::Document & document);
	void GetFiles(std::vector<filesystem::path> & files, const filesystem::path & directoryPath);
	std::string GetContentTypeByExtension(const std::string & extension) const;
};
