var {Comment} = require('../database/models.js');
var {House} = require('../database/models.js');

const controller = {

  get: (req, res) => {
    console.log('in get');
    Comment.find({}, (err, docs) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(docs)
      };
    })
  },
  
  post: (req, res) => {
    console.log(req.body);
    Comment.find({Text: {$regex: req.body.Text, $options: 'i'}}, (err, docs) => {
      if (err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(docs)
      }
    })
  },

};

module.exports.controller = controller;