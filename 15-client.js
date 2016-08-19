var http = require('http');

var options = {
  host: "www.google.com",
    port: 80,
    path: "/",
    method: 'GET'
};

console.log("Making request to ... ");


var req = http.request('http://www.xero.com/',function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();

/*
http.get(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
})*/
