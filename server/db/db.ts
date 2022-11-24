import sqlite3 from "sqlite3";
import child_process from "child_process";

const sqlite: any = sqlite3.verbose();

export const connect = async () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(new sqlite.Database("./db/database.db", sqlite.OPEN_READWRITE));
    } catch (error) {
      child_process.execSync(`./db/sqlite3.exe database.db `);
      child_process.execSync(`./db/sqlite3.exe database.db < propagate.sql `);
      reject(error);
    }
  });
};

export default async function database() {
  try {
    let db: any = await connect();

    for (let i = 0; i < 10; i++) {
      let src = `INSERT INTO User(login, password, name) VALUES ('test${i}}', 'test', 'test');`;

      db.run(src);
    }

    db.all(`SELECT * FROM User`, [], (err: any, row: any) => {
      if (err) {
        console.log(err);
      }
      console.log(row);
    });
  } catch (error) {
    console.log(error);
  }
}

// database();
// console.log("test");
