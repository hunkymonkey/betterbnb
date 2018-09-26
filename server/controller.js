const mongoose = require("mongoose");
const {House} = require("../database/models.js");
module.exports = {
  fetch: (req, res) => {
    House.find()
      .sort({ houseId: 1 })
      .then(data => res.status(200).send(data));
  },
  post: (req, res) => {
    console.log(`in post`);
  }
};
