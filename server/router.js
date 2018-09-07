const routes = require("express").Router();
const controller = require("./controller.js");

routes
  .route(`/pictures`)
  .get(controller.fetch)
  .post(controller.post);

module.exports = routes;
