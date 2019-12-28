const express = require('express');
const app = express();
const config = require('./config/app.config');
const ResHand = require('./lib/common');
const common = require('./lib/controller/common');
const DBConfig = require('./config/db.config'); // call and configure Mongodb
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    ResHand.resSend(req, res, true, '', []);
});
app.use('/', require('./lib/auth/user.route'));
app.use('/user', require('./lib/user/user.route'));
app.use(common.errorHandler);
app.all('**', common.defaultRoute);

app.listen(config.port, () => {
    console.log(`${config.introMsg} ${config.port}`); // back ticks multiline es6 feature
})