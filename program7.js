var http = require('http');

var uriToGet = process.argv[2];

http.get(uriToGet, function(response)
{
	response.setEncoding("utf8");
	
	response.on("data", function(data)
	{
		console.log(data);		
	});
});