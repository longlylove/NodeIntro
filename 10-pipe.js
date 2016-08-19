var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

/*var s = request('http://www.xero.com');

s.pipe(process.stdout);*/

//request('http://www.xero.com').pipe(process.stdout);

//request('http://www.xero.com').pipe(fs.createWriteStream('xero.html'));

request('http://www.xero.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('xero.html'));