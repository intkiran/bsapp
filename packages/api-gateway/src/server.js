const express = require("express");
const httpProxy = require("http-proxy-middleware");
const config = require("./config");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
let proxyUsers;
let proxyTasks;

let app = express();
app.use(cors());

app.use("/status", (req, res) => {
  res.send("Proxy server is working........!");
});

proxyUsers = httpProxy({
  target: config.USERS_URL,
  pathRewrite: { "^/api/v1/users/": "/" }
});
app.use("/api/v1/users/", proxyUsers);

proxyTasks = httpProxy({
  target: config.TASKS_URL,
  pathRewrite: { "^/api/v1/tasks/": "/" }
});
app.use("/api/v1/tasks/", proxyTasks);
app.use(cors);
app.use((req, res) => {
  res.status(404).send({ message: "Resource not found....!" });
});
app.listen(process.env.APP_PORT || 8080);

module.exports = app;
