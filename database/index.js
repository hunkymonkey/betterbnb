const mongoose = require("mongoose");
const random = require("mongoose-simple-random");

mongoose.connect('mongodb://mongo:27017/bbnb_detail');

const db = mongoose.connection;
db.on('error', () => {
  console.log('error connecting to mongodb');
});
db.once('open', () => {
  console.log('successfully connected to mongodb');
});

let houseSchema = new mongoose.Schema({
  ownerName: { type: String, require: true },
  ownerPic: { type: String, require: true },
  houseType: { type: String, require: true },
  title: { type: String, require: true },
  city: { type: String, require: true },
  guestNum: { type: Number, require: true },
  bedroomNum: { type: Number, require: true },
  bedNum : { type: Number, require: true },
  bathNum: { type: Number, require: true },
  bathType: { type: String, require: true },
  description: { type: String, require: true },
  amenities: [ String ]
});
houseSchema.plugin(random);

let House = mongoose.model('House', houseSchema);

module.exports = { House };