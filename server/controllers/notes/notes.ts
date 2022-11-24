import http from "http";
import { connect } from "../../db/db";
import { getBody } from "../../utils/getBody";
import { dbQuery } from "../../utils/promiseDb";
import { isLogged } from "../auth/auth";
import { Message, Login } from "../../utils/types/types";

interface NoteReq extends Login {
  id: number;
  notion: string;
  date: string;
  profileId: number;
}

export const newNote = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: NoteReq = await getBody(req);
  let check: boolean = await isLogged(body.login, body.password);

  if (check) {
    try {
      let sql = `INSERT INTO Notion(date, notion, profileId, userId) VALUES ('${body.date}', '${body.notion}', ${body.profileId}, ${body.id});`;

      let data = await dbQuery(sql, db);
      sql = `SELECT * FROM Notion WHERE userId = ${body.id}`;
      data = await dbQuery(sql, db);

      const message: Message = {
        msg: "notion cool",
        success: true,
        data: data,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    } catch (err: any) {
      if (err) {
        const message: Message = {
          msg: "err",
          success: false,
          data: [],
        };
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
      }
    }
  } else {
    const message: Message = {
      msg: "err",
      success: false,
      data: [],
    };
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  }
};

interface UpdateNoteReq extends Login {
  id: number;
  notion: string;
  date: string;
  notionId: number;
}

export const updateNote = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: UpdateNoteReq = await getBody(req);
  let check: boolean = await isLogged(body.login, body.password);

  if (check) {
    try {
      let sql = `UPDATE Notion SET date = '${body.date}', notion = '${body.notion}' WHERE id = ${body.notionId}`;

      let data = await dbQuery(sql, db);

      sql = `SELECT * FROM Notion WHERE userId = ${body.id}`;
      data = await dbQuery(sql, db);

      const message: Message = {
        msg: "notion cool",
        success: true,
        data: data,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    } catch (err: any) {
      if (err) {
        const message: Message = {
          msg: "err",
          success: false,
          data: [],
        };
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
      }
    }
  } else {
    const message: Message = {
      msg: "err",
      success: false,
      data: [],
    };
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  }
};

interface DeleteNoteReq extends Login {
  id: number;
  notionId: number;
}
export const deleteNote = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: DeleteNoteReq = await getBody(req);
  let check: boolean = await isLogged(body.login, body.password);

  if (check) {
    try {
      let sql = `DELETE FROM Notion WHERE id = ${body.notionId}`;

      let data = await dbQuery(sql, db);

      sql = `SELECT * FROM Notion WHERE userId = ${body.id}`;
      data = await dbQuery(sql, db);

      const message: Message = {
        msg: "profile cool",
        success: true,
        data: data,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    } catch (err: any) {
      if (err) {
        const message: Message = {
          msg: "err",
          success: false,
          data: [],
        };
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
      }
    }
  } else {
    const message: Message = {
      msg: "err",
      success: false,
      data: [],
    };
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  }
};
