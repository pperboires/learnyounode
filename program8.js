var http = require('http');
var bl = require('bl');

var uriToGet = process.argv[2];

http.get(uriToGet, function(response)
{
	var page;
	
	response.pipe(bl(function (err, data)
	{
		if (err)
		{
			console.error(err);
		}
		page = data.toString();
	}));

	response.on('end', function()
	{
		console.log(page.length);
		console.log(page);
	});
	
});