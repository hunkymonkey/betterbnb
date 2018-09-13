var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes.js')
require('../database/index.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'))

app.use('/betterBnB', routes)

module.exports.app = app;