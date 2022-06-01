const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req: { body: any; }, res: { writeHead: (arg0: number, arg1: { 'Content-Type': string; }) => void; end: (arg0: string) => void; }) => {
  console.log(req);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(PORT, (err: any, res: any) => {
  console.log(`Server listening on ${PORT}`)
});