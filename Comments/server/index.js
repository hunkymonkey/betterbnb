var express = require('express');
var bodyParser = require('body-parser');
var {Comment} = require('../database/index.js');
// var {populateData} = require('../database/populate.js');
var PORT = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'))

app.get('/betterBnB/comments', (req, res) => {
  console.log('in get');
  Comment.find({}, (err, docs) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(docs)
    };
  })
})

app.post('/betterBnB/comments', (req, res) => {
  Comment.create(req.body, (err, docs) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(docs)
    }
  })
})

app.listen(PORT, () => {
  console.log('connected to server');
});