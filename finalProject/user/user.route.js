const express = require('express');
const router = express.Router();
const controller = require('./user.controller')
/**
 * Middle ware specific to this route
 */
router.use((req, res, next) => {
    console.log('sers')
    next();
})

router.get('/user', controller.getUser);
module.exports = router;