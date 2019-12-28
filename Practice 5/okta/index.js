const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const logger = require('morgan')

// Load view engine
app.set('view engine', 'pug')

app.set('./', function(req, res) => {
    res.render('index')
})

// Use for apps
app.use('cookieParser'())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'LONG_RANDOM_STRING_HERE',
  resave: true,
  saveUninitialized: false
}))


// Start Server
app.listen(5000, () => {
    console.log("We are connected to the server on port")
})