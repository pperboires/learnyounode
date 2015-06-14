var http = require('http')
var bl = require('bl')

var pages = []
var count = 0

function print () {
 for (var i = 0; i < 3; i++)
   console.log(pages[i])
}

function get (index) {
 	http.get(process.argv[2 + index], function (response) 
 	{
   		response.pipe(bl(function (err, data) {
	     	if (err)
	     	{
	       		return console.error(err);
		 	}
	     
	    	pages[index] = data.toString();
	     	count++;

	     	if (count == 3)
	     	{
	       		print();
	       	}
   		}));
 	});
}

for (var i = 0; i < 3; i++) {
    get(i);
}