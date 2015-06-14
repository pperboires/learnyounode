var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var extFilter = process.argv[3];

fs.readdir(dirPath, function(err, list) 
{
	if (err) throw err;

	for (i = 0; i < list.length; i++)
	{
		var file = list[i];
		
		if ("." + extFilter == path.extname(file))
		{
			console.log(file);
		}
	}
	
});
