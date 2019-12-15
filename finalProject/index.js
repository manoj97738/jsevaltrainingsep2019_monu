const express = require('express');
const app = express();;
app.use('', require('./user/user.route'))
app.get('**', (req, res) => {
    res.send('We dont have such API')
})

app.listen(4000)