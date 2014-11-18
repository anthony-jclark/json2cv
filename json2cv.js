
var fs = require('fs');
var cvdata = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

console.log(cvdata);