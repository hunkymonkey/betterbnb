const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes.js');
const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App is listening on PORT: ', PORT);
});