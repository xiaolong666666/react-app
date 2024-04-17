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

app.listen(3333, () => {
  console.log("app listening on http://localhost:3333!");
});
