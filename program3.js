var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var total = buf.toString().split('\n').length -1;

console.log(total);