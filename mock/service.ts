const express = require("express");
const { getUserList, getArticleList } = require("./data");
const { sleep } = require("./utils");

const app = express();

app.get("/users", async (req, res) => {
  await sleep(3000);
  res.json(getUserList());
});

app.get("/articles", async (req, res) => {
  await sleep(2000);
  res.json(getArticleList());
});

app.get("/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  setInterval(() => {
    res.end(`data: ${new Date().toLocaleString()}\n\n`);
  }, 1000);
});

app.listen(3333, () => {
  console.log("app listening on http://localhost:3333!");
});
