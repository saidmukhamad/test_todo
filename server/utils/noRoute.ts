import http from "http";

export const noRoute = (res: http.ServerResponse) => {
  res.writeHead(404);
  res.end(JSON.stringify({ status: 404, reason: "wrong url" }));
};
