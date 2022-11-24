import http from "http";
import { connect } from "../../db/db";
import { getBody } from "../../utils/getBody";
import { dbQuery } from "../../utils/promiseDb";
import { isLogged } from "../auth/auth";
import { Message, Login } from "../../utils/types/types";

interface ProfileReq extends Login {
  id: number;
  name: string;
}

export const newProfile = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: ProfileReq = await getBody(req);
  let check: boolean = await isLogged(body.login, body.password);

  if (check) {
    try {
      let sql = `INSERT INTO Profile(userId, name) VALUES (${body.id}, '${body.name}');`;

      let data = await dbQuery(sql, db);

      sql = `SELECT * FROM Profile WHERE userId = ${body.id};`;
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

interface DeleteProfile extends Login {
  id: number;
  profileId: number;
}
export const deleteProfile = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  let db: any = await connect();

  let body: DeleteProfile = await getBody(req);
  let check: boolean = await isLogged(body.login, body.password);

  if (check) {
    try {
      let sql = `DELETE FROM Profile WHERE id = ${body.profileId}`;

      let data = await dbQuery(sql, db);

      sql = `SELECT * FROM Profile WHERE userId = ${body.id}`;
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
