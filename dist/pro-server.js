"use strict";
const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(PORT, (err, res) => {
    console.log(`Server listening on ${PORT}`);
});
