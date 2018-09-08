var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/betterBnB');

var db = mongoose.connection;

db.on('error', () => {
  console.log('error');
});

db.once('open', () => {
  console.log('connected to database!')
});

var commentsSchema = new mongoose.Schema({
  User: String,
  Name: String,
  ImageUrl: String,
  AccuracyRating: Number,
  CommunicationRating: Number,
  CleanlinessRating: Number,
  LocationRating: Number,
  CheckInRating: Number,
  ValueRating: Number,
  Text: String,
  House: Number
});

var Comment = mongoose.model('Comment', commentsSchema);

module.exports.Comment = Comment;