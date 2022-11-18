import http from "http";

const PORT: number = 3001;

http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req);
    res.write("Test");
    res.end();
  })
  .listen(PORT);
