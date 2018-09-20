const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static(__dirname + '/Client'));

app.listen(PORT, () => {
  console.log('connected to proxy server');
});