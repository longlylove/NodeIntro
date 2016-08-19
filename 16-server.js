var fs = require('fs');
var dispatcher = require('httpdispatcher');

var http = require('http');
const port = 80;

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');


//A sample GET request
dispatcher.onGet("/getPage1", function (req,res) {
   res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Page 1');
});

//A sample POST request
dispatcher.onPost("/toPost1", function (req,res) {
   res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Post Data Here!')
});

function requestHandle(req,res) {
    try {
        /*res.writeHead(200, {'Content-Type': 'text/plain'});
        if (req.url === '/file.txt') {
            fs.createReadStream(__dirname + '/file.txt').pipe(res);
        } else {
            res.end("Hello World - from: " + res.url);
        }*/
        dispatcher.dispatch(req,res);
    }
    catch (err) {
        console.log(err);
    }
}


var server = http.createServer(requestHandle);

server.listen(port, function(){
    console.log('Server Running!');
});

