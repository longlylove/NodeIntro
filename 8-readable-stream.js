var request = require('request');

var s = request('http://www.xero.com');

s.on('data', function(chunk) {
  console.log(">> Data >>" + chunk)
});

s.on('end', function () {
    console.log(">> Done! >>")
});