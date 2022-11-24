export const dbQuery = (sql: string, db: any): any => {
  return new Promise((resolve, reject) => {
    try {
      db.all(sql, [], (err: any, row: any[]) => {
        if (err) {
          reject(err);
        }
        resolve(row);
      });
    } catch (error) {
      console.log("asdasdad");
      reject(error);
    }
  });
};
