var http = require('http');
var map = require('through2-map')

var port = process.argv[2];

if (port == undefined)
{
	console.error('port undefined.');
	return;
}

var server = http.createServer(function(request, response)
{
	if (request.method != 'POST')
	{
		return response.end('Send me a post.');
	}

	request.pipe(map(function (chunk) {
  		return chunk.toString().toUpperCase()
	})).pipe(response)
})

console.log('port: '+port);

server.listen(port);