const express = require("express");
const parser = require("body-parser");
const path = require("path");

const PORT = 13337;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.listen(PORT, () => {
  console.log("get yo proxy on");
});
