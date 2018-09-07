const { User, Location } = require('../database/index.js');

module.exports = {
  fetch: (req, res) => {
    console.log('im in get in controller')
  },

  post: (req, res) => {
    console.log('im in post in controller')
  }
}