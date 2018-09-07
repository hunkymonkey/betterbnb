const express = require("express");
const path = require("path");
const parser = require("body-parser");
const PORT = 1337;
const app = express();
const routes = require("./router.js");

app.use(parser.json());

app.use(parser.urlencoded({ extended: true }));

app.use(`/betterbnb`, routes);

app.use(express.static(path.resolve(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log("app is listening to port 1337");
});
