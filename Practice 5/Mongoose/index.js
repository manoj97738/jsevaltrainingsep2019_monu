const express = require('express')
const path = require('path')
const customer = require("./customer.json")

// Init App
const app = express()

// Load Views Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Home Route
app.get('/', (req, res) => {
    res.render('index', {
        title:'Dashboard'
    })
})

// Add Route
app.get('/dashboard/report', (req, res) => {
    res.render('report_dashboard', {
        title:'Report Dashboard'
    })
})

// Start Server
app.listen(8000, () => {
    console.log("Started server on port 8000")
})