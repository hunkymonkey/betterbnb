const mongoose = require("mongoose");
const db = require("./index.js");
const URLs = require("../Data.js");
const random = require("mongoose-simple-random");

const houseSchema = mongoose.Schema({
  houseId: Number,
  pictures: [String]
});

houseSchema.plugin(random);

const House = mongoose.model("House", houseSchema);

const randomIndexOf = arr => Math.floor(Math.random() * arr.length);

const random7 = arr => {
  let output = [];
  for (let i = 0; i < 7; i++) {
    output.push(arr[randomIndexOf(arr)]);
  }
  return output;
};

module.exports.House = House;
module.exports.random7 = random7;
module.exports.randomIndexOf = randomIndexOf;
