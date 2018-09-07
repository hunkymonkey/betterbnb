var express = require('express');
var bodyParser = require('body-parser');
var {Comment} = require('../database/index.js');
var PORT = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'))

app.get('/betterBnB/comments', (req, res) => {
  console.log('in get');
  res.status(200).send('in get');
})

app.post('/betterBnB/comments', (req, res) => {
  res.status(200).send('in post');
})

app.listen(PORT, () => {
  console.log('connected to server');
});