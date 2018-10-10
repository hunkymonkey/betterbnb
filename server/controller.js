const mongoose = require("mongoose");
const {House} = require("../database/models.js");

module.exports = {
  fetch: (req, res) => {
    House.findOneRandom((err, result) => {
      if (err) {
        console.log('err getting a random one')
      } else {
        console.log('result from find one random is', result)
        res.status(200).send(result);
      }
    })
      // .sort({ houseId: 1 })
      // .then(data => res.status(200).send(data));
  },
  post: (req, res) => {
    console.log(`in post`);
  }
};
