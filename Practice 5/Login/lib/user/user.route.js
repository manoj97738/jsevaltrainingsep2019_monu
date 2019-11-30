const express = require('express')
const router = express.Router()
const controller = require('./user.controller');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/user', controller.readOne);
router.get('/user/all', controller.findAll);
router.post('/user', controller.create);
module.exports = router