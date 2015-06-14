var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileToResponse = process.argv[3];

if (port == undefined)
{
	console.error('port undefined.');
	return;
}

if (fileToResponse == undefined)
{
	console.error('file to response undefined.');
	return;
}

var server = http.createServer(function(request, response)
{
	response.writeHead(200, { 'content-type': 'text/html' });
	var readStream = fs.createReadStream(fileToResponse);

	readStream.on('open', function () {
    	readStream.pipe(response);
  	});

  	readStream.on('error', function(err) {
    	response.end(err);
  	});

});

console.log('port: '+port);

server.listen(port);