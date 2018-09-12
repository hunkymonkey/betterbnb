const router = require('express').Router();
const controller = require('./controller.js');

router.route('/bbnb_detail')
  .get(controller.fetch)
  .post(controller.post);

module.exports = router;