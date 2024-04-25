const WebSocketServer = require("ws");

const server = new WebSocketServer.Server({ port: 8080 });

const users = new Set();

let count = 0;

// @ts-ignore
server.on("connection", (ws) => {
  users.add(ws);

  count++;

  console.log(`${count} users connected`);

  // @ts-ignore
  ws.on("message", (message) => {
    users.forEach((user) => {
      if (user !== ws) {
        user.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    users.delete(ws);
  });
});
