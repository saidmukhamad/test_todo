import http from "http";

export const getBody = async (req: http.IncomingMessage): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      let body: any[] = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          if (body.length > 0) {
            resolve(JSON.parse(Buffer.concat(body).toString()));
          }
        });
    } catch (error) {
      reject(error);
    }
  });
};
