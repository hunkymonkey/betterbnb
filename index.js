const express = require('express');
const path = require('path');
const parser = require('body-parser');
const router = require('./router.js')
const PORT = 3000;

const app = express();
const db = require('../database/index.js')

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(resolve.path(__dirname, '../client/dist')));

app.use('./api', router);

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT);
});
