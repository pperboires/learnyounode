var fs = require('fs');
var filePath = process.argv[2];
var bufCallback = fs.readFile(filePath, function(err, data) 
{
	if (err) throw err;

	var total = data.toString().split('\n').length -1;

	console.log(total);
});
