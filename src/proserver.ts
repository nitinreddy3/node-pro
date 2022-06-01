import http from 'http';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req: any, res: { end: (arg0: string) => void; }) => {
  res.end('Hello world\n');
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});