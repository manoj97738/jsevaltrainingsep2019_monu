const express = require('express');
const controller = require('./user.controller');
const router = express.Router();

router.get('/', controller.fetch)
router.post('/', controller.create)

module.exports = router;