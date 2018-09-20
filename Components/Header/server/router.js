const routes = require('express').Router();
const controller = require('./controller.js');

routes.route('/betterbnb')
  .get(controller.fetch)
  .post(controller.post);

module.exports = routes;
