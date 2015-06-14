var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

if (port == undefined)
{
	console.error('port undefined.');
	return;
}

var server = net.createServer(function(socket)
{
	var currentDatetime = new Date();
	socket.write(strftime('%F %H:%M', currentDatetime));
	socket.end('\n');
});

console.log('port: '+port);

server.listen(port);