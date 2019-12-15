const express = require('express');
const app = express();
const config = require('./config/app.config');
const ResHand = require('./lib/common/response.handler');
const common = require('./lib/controller/common');
app.get('/', (req, res, next) => {
    ResHand.resSend(req, res, true, '', []);
});

app.use(common.errorHandler);
app.all('**', common.defaultRoute);

app.listen(config.port, () => {
    console.log(`${config.introMsg} ${config.port}`)
})