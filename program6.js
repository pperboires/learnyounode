var find = require('./program6-module.js');

var dirPath = process.argv[2];
var extFilter = process.argv[3];

find(dirPath, extFilter, function(err, filesFound)
{
	if (err)
	{
		console.error('There was an error.', err);
	}

	for(i = 0; i < filesFound.length; i++)
	{
		console.log(filesFound[i]);
	}
});

