const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public_html'));
app.use(function (req, res, next) {
    console.log("middleware");
    next()
})
app.use(function (req, res, next) {
    console.log("middleware");
    next()
})

app.get('/contact.html', (req, res) => {
    res.send('Helcontacto World!')
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('login World!');
});
app.post('/login', (req, res) => {
    res.send('post login World!');
});
app.put('/login', (req, res) => {
    res.send('put login World!');
});
app.patch('/login', (req, res) => {
    res.send('patch login World!');
});
app.delete('/login', (req, res) => {
    res.send('login World!');
});
app.get('/signup', (req, res) => {
    res.send('delete signup World!');
})
app.all('/**', (req, res) => {
    res.send('No route found!');
})
// app.get('/**', (req, res) => {
//     res.send('No route found!');
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))