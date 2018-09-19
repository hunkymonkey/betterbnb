const express = require('express');
const PORT = 5000;

const app = express();

app.use(express.static(__dirname + '/client'));

app.listen(PORT, () => {
  console.log('App is listening on PORT: ', PORT);
});