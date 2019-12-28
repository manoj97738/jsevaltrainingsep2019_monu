const express = require('express');
const controller = require('./user.controller');
const router = express.Router();
const auth = require('../auth/auth.controller');
router.post('/', auth.isLoggedIn.bind(auth), controller.create.bind(controller))
router.get('/', auth.isLoggedIn.bind(auth), controller.read.bind(controller))
router.get('/:id', auth.isLoggedIn.bind(auth), controller.readOne.bind(controller))
router.patch('/:id', auth.isLoggedIn.bind(auth), controller.update.bind(controller))
router.delete('/:id', auth.isLoggedIn.bind(auth), controller.remove.bind(controller))

module.exports = router;