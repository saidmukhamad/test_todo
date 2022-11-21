import http from "http";
import url from "url";
import database from "./db/db";

const HOST: string = "localhost";
const PORT: number = 3001;

let server: http.Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const reqURL: string | null = req.url ? url.parse(req.url).pathname : null;

    database();
    switch (reqURL) {
      case "/data":
        break;
      case "/auth":
        break;
    }

    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    console.log(reqURL);

    res.end(`{ "msg": "penis" }`);
  }
);

server.listen(PORT, HOST, () => {
  console.log("started");
});
