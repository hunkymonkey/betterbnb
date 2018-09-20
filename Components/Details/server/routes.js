const router = require('express').Router();
const controller = require('./controller.js');

router.route('/bbnb_detail')
  .get(controller.fetch)

module.exports = router;