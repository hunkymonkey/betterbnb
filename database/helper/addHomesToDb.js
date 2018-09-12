const { House } = require('../index.js');
let homesJSON = require('./homes.json');

let addHomes = () => {
  House.insertMany(homesJSON, (err, data) => {
    if (err) {
      console.log('error adding homes to db');
      throw new Error(err);
    } else {
      console.log('successfully added homes to db', data);
    }
  });
};

addHomes();