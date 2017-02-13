var http = require("http");
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {

    var filename = path.basename(req.url) || "index.html";
    var ext = path.extname(filename);
    var localPath = __dirname + "/public/";

    res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": html.length
    });
    res.end(html);
}).listen(8000, "127.0.0.1");