import http from "http";

import { register, auth } from "./controllers/auth/auth";
import { newNote, updateNote, deleteNote } from "./controllers/notes/notes";
import { newProfile, deleteProfile } from "./controllers/profiles/profiles";
import { noRoute } from "./utils/noRoute";

const HOST: string = "localhost";
const PORT: number = 3001;

let server: http.Server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    switch (req.method) {
      case "GET":
        if (req.url === "/notes") {
        } else if (req.url === "/profiles") {
        } else {
          noRoute(res);
        }
        break;
      case "POST":
        if (req.url === "/auth") {
          auth(req, res);
        } else if (req.url === "/reg") {
          register(req, res);
        } else if (req.url === "/note") {
          newNote(req, res);
        } else if (req.url === "/profile") {
          newProfile(req, res);
        } else {
          noRoute(res);
        }
        break;
      case "DELETE":
        if (req.url === "/note") {
          deleteNote(req, res);
        } else if (req.url === "/profile") {
          deleteProfile(req, res);
        } else {
          noRoute(res);
        }
        break;
      case "PUT":
        if (req.url === "/note") {
          updateNote(req, res);
        } else {
          noRoute(res);
        }
    }

    // let stat = fs.statSync(`./public/deep.pdf`);
    // let mimeType: string | false = mime.lookup(`./public/deep.pdf`);
    // if (mimeType) {
    //   res.writeHead(200, { "Content-Type": mimeType, "Content-Length": stat.size });
    //   let readStream = fs.createReadStream(`./public/deep.pdf`);
    //   readStream.pipe(res);
    // } else {
    //   res.writeHead(404);
    // }
  }
);

server.listen(PORT, HOST, () => {
  console.log("started");
});
