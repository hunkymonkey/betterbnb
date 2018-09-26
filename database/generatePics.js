const mongoose = require("mongoose");
const { House, random7 } = require("./models.js");
const URLs = require("../Data.js");

for (let i = 0; i < 10000000; i++) {
  let house = new House({
    houseId: i,
    pictures: random7(URLs)
  });
  house
    .save()
    .then(console.log("saved"))
    .catch(err => console.error(err));
}

console.log(URLs)