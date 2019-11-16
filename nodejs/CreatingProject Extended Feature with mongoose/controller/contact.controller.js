var express = require('express')
var router = express.Router()
const User = require('../models/user.model');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())

    next()
})
// define the home page route
router.get('/', function (req, res) {
    var user = new User({
        name: 'manoj',
        age: 27,
        bio: 'i am romaing guy',
    });
    user.save(function (err) {
        //
    });
    res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router