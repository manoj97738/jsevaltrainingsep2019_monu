const express = require('express');
const app = express();

app.set('view', 'pug');

app.get('/', function(req, res){
    res.send('Hello World!!');
});

app.listen(3000, function(){
    console.log('Server Started on port 3000...');
});