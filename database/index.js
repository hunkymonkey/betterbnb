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

let userSchema = new Schema({
  email: { type: String, unique: true, require: true },
  password: { type: String, unique: true, require: true },
  firstname: String,
  lastname: String
});

let locationSchema = new Schema({
  cities: [ String ],
  country: String
});

let User = mongoose.model('user', userSchema);
let Location = mongoose.model('location', locationSchema);

module.exports = { User, Location };