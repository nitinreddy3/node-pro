"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var PORT = process.env.PORT || 3000;
var server = http_1.default.createServer(function (req, res) {
    res.end('Hello world\n');
});
server.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});
