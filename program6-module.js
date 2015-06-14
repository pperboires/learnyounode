var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extFilter, callback) {
    		
	fs.readdir(dirPath, function(err, files)
	{
		if (err)
		{
			return callback(err);
		}

		var filesFound = [];
		for (i = 0; i < files.length; i++)
		{
			var file = files[i];
			
			if ("." + extFilter === path.extname(file))
			{			
				filesFound.push(file);				
			} 
		}

		callback(null, filesFound);
	});

};