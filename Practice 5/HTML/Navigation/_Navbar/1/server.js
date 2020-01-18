var express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.render('index')
})

var port = 4000
app.listen(port, function() {
    console.log("we are connected to the server on port")
})