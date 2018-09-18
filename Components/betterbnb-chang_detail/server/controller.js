const { House } = require('../database/index.js');

module.exports = {
  fetch: (req, res) => {
    House.findOneRandom( (err, result) => {
      if (err) {
        console.log('error fetching random house data');
        res.sendStatus(500);
      } else {
        console.log('successfully getting one random data');
        res.status(200).json(result);
      }
    });
  }
};