const express = require("express");
const path = require("path");
require('newrelic');
const parser = require("body-parser");
const PORT = 1337;
const app = express();
const routes = require("./router.js");
const cors = require("cors");

app.use(parser.json());

app.use(parser.urlencoded({ extended: true }));

app.use(cors());

app.use(`/betterbnb`, routes);

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(PORT, () => {
  console.log("app is listening to port 1337");
});
