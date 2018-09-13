var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
  User: String,
  Name: String,
  ImageUrl: String,
  Date: { type: Date, default: Date.now },
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

var houseSchema = new mongoose.Schema({
  Id: {type: Number, unique: true},
  AccuracyRating: Number,
  CommunicationRating: Number,
  CleanlinessRating: Number,
  LocationRating: Number,
  CheckInRating: Number,
  ValueRating: Number,
  OverallRating: Number,
});

var House = mongoose.model('House', houseSchema);

module.exports.Comment = Comment;
module.exports.House = House;