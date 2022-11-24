import http from "http";
import { connect } from "../../db/db";
import { getBody } from "../../utils/getBody";
import { dbQuery } from "../../utils/promiseDb";

import { Login, User, Message } from "../../utils/types/types";

export const auth = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    let db: any = await connect();

    let body: Login = await getBody(req);
    console.log(body);

    let sql = `SELECT * FROM User WHERE login = '${body.login}' AND password = '${body.password}'`;

    let data = await dbQuery(sql, db);

    if (data.length > 0) {
      const message: Message = {
        msg: "",
        success: true,
        data: [data],
      };

      let profile: string = `SELECT * FROM Profile where userId = ${data[0].id}`;
      let list: string = `SELECT * FROM Notion where userId = ${data[0].id}`;

      let dataProfile = await dbQuery(profile, db);
      let dataList = await dbQuery(list, db);

      message.data.push(dataProfile, dataList);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    } else {
      const message: Message = {
        msg: "nonvalid",
        success: true,
        data: [],
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    }
  } catch (err: any) {
    const message: Message = {
      msg: "replicate",
      success: false,
      data: [],
    };
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  }
};

export const register = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: User = await getBody(req);

  try {
    let sql = [
      `INSERT INTO User(login, password, name) 
    VALUES ('${body.login}', '${body.password}', '${body.name}');`,
      `SELECT * FROM User WHERE id=(SELECT max(id) FROM User);
    `,
    ];

    let data = await dbQuery(sql[0], db);
    data = await dbQuery(sql[1], db);

    let id: number = data[0].id;
    let profile: string = `INSERT INTO Profile(userId, name) VALUES (${id}, 'new');`;
    let list: string = `SELECT * FROM Profile where userId = ${id};`;

    data = await dbQuery(profile, db);
    data = await dbQuery(list, db);

    const message: Message = {
      msg: "register",
      success: true,
      data: data,
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  } catch (err: any) {
    if (err.errno == 19) {
      const message: Message = {
        msg: "replicate",
        success: false,
        data: [],
      };

      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify(message));
    }
  }
};

export const isLogged = async (login: string, password: string) => {
  let db: any = await connect();
  let sql = `SELECT * FROM User WHERE login = '${login}' and password = '${password}';`;

  try {
    let data = await dbQuery(sql, db);
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const example = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  let db: any = await connect();

  let body: any = await getBody(req);
  let sql = ``;
  console.log(body);
  try {
    let data = await dbQuery(sql, db);

    const message: Message = {
      msg: "",
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
};
