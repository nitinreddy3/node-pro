var http = require("http");
var fs = require('fs');
var path = require('path');
var helpers = require('./public/helpers');
var evenMoreHelpers = require('./public/evenMoreHelpers');
var request = require("request");

/**
 * Create http server example
 */

/* 
http.createServer(function(req, res) {

    var filename = path.basename(req.url) || "index.html";
    var ext = path.extname(filename);
    var localPath = __dirname + "/public/";

    res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": filename.length
    });
    res.end(filename);
}).listen(8000, "127.0.0.1"); 
*/

// helpers.myName("Nitin", 28);

// evenMoreHelpers()

// fs.readFile("test.txt", (err, data) => {
//     console.log(data.toString())
// })


request('http://swapi.co/api/people/1', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body)); // Show the JSON for the Star Wars Character
    }
});
