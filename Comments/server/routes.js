const router = require('express').Router();
const { Controller } = require('./controller.js');

router
  .route('/comments')
  .get(Controller.get)
  .post(Controller.post)

module.exports = router;