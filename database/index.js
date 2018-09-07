const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/bbnb-header');

let db = mongoose.connection;
db.on('error', () => {
  console.log('Error connecting to mongoDB');
});
db.once('open', () => {
  console.log('Successfully connected to mongoDB');
});

let userSchema