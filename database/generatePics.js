const mongoose = require("mongoose");
const { House, random7 } = require("./models.js");
const URLs = require("../Data.js");

for (let i = 0; i < 300000; i++) {
  // let house = new House({
  //   houseId: i,
  //   pictures: random7(URLs)
  // });
  // house
  //   .save()
  //   .then(console.log("saved"))
  //   .catch(err => console.error(err));
  House.create({
    houseId: i,
    pictures: random7(URLs)
  }, (err, data) => {
    if (err) {
      console.log('error adding to db');
    } else {
      console.log(i);
    }
  });
}
