const express = require('express');
const people = require("./people.json")
const app = express();
const indexController = require('./controller/index.coontroller');
const contactController = require('./controller/contact.controller');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/deadpool', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create a new MongoClient
const client = new MongoClient('mongodb://localhost:27017');

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db('myproject');
    const collection = db.collection('madhur');
    collection.insert({ name: 'manoj', age: 7 });
    client.close();
});

app.set('view engine', 'pug');


app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('M<iddle ware called');
    next();
})
//app.use(contactController);
app.use('/birds', contactController); // most used way

app.get('/', indexController.landing)
app.get('/contact', function (req, res) {
    res.render('contact', { title: 'Hey', message: 'Hello there!', people: people })
})
app.get('*', (req, res) => {
    res.send('hello world')
}).listen(2000)