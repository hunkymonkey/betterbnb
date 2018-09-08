const { User, Location } = require('../index.js');
const userData = require('../users.json');
const locationData = require('../countries.json');

let loadUserDb = (userData) => {
  User.insertMany(userData, (err, data) => {
    if (err) {
      console.log('error loading users into db');
      throw new Error(err);
    } else {
      console.log('successfully loaded users into db');
    }
  })
};

let loadLocationDb = (locationData) => {
  Location.insertMany(locationData, (err, data) => {
    Location.insertMany(locationData, (err, data) => {
      if (err) {
        console.log('error loading locations into db');
        throw new Error(err);
      } else {
        console.log('successfully loaded locations into db');
      }
    })
  });
}

loadUserDb(userData);
loadLocationDb(locationData);
