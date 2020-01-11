const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.render('index')
})

const port = 2000
app.listen(port, function() {
    console.log("We are connected to the server on port")
})