const express = require('express');
const people = require("./people.json")
const app = express();
app.set('view engine', 'pug');


app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('M<iddle ware called');
    next();
})
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Hey', message: 'Hello there!', people: people })
})
app.get('*', (req, res) => {
    res.send('hello world')
}).listen(2000)