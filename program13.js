var http = require('http');
var url = require('url');

var port = process.argv[2];

if (port == undefined)
{
	console.error('port undefined.');
	return;
}

var server = http.createServer(function(request, response)
{
	if (request.method != 'GET')
	{
		return response.end('Send me a get.');
	}

	console.log('request.url: ' + request.url);

	
	var parse = url.parse(request.url, true);

	console.log('parse: '+ parse);
	console.log('parse.pathname: '+ parse.pathname);

	if (parse.pathname === '/api/parsetime')
	{
		console.log('parse.query.iso:' + parse.query.iso);

		if (parse.query.iso != undefined)
		{
			var date = new Date(parse.query.iso);
			return response.end(JSON.stringify({
				hour : date.getHours(),
				minute : date.getMinutes(),
				second : date.getSeconds()
			}));
		}
	}
	else if (parse.pathname === '/api/unixtime')
	{
		if (parse.query.iso != undefined)
		{
			var date = new Date(parse.query.iso)
			return response.end(JSON.stringify({
				unixtime : date.getTime()
			}));
		}	
	}
	else {
		response.writeHead(404);
	}
	
	response.end();

})

console.log('port: '+port);

server.listen(port);