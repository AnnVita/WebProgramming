#include "stdafx.h"
#include "ServerHandler.h"

int main()
{
	try
	{
		CServerHandler server;
		server.StartHandleRequests();
	}
	catch (const std::exception & e)
	{
		std::cerr << e.what();
		return 1;
	}
	return 0;
}
