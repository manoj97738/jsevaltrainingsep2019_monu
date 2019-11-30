const express = require('express');
const app = express()
/**
 * sets View engine as EJS
 */
app.set('view-engine', 'ejs')
/**
 * Handle POst request
 */
app.use(express.urlencoded({ extended: false }))
/**
 * Coonect to DB
 */
require('./lib/db/db.connection');
/**
 * Define USer routes
 */
app.use('', require('./lib/user'));
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Madhur' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', (req, res) => {
    req.body.email
})

app.listen(3030, () => {
    console.log("Server haaaaas staretd ")
})