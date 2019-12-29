const express = require('express');
const app = express();
const config = require('./config/app.config');
const ResHand = require('./lib/common');
const common = require('./lib/controller/common');
const DBConfig = require('./config/db.config'); // call and configure Mongodb
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const uuidv1 = require('uuid/v4');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork(); // Create a New Worker, If Worker is Dead
    });

} else {

    const app = express();
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.use(fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        tempFileDir: '/temp/'
    }));
    app.get('/', (req, res, next) => {
        ResHand.resSend(req, res, true, '', []);
    });
    app.post('/upload', function (req, res) {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.somekeyfile;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('./temp/' + uuidv1() + '.' + sampleFile.mimetype.toString().split('/')[1], function (err) {
            if (err)
                return res.status(500).send(err);

            res.send('File uploaded!');
        });
    });

    app.use('/', require('./lib/auth/user.route'));
    app.use('/user', require('./lib/user/user.route'));
    app.use(common.errorHandler);
    app.all('**', common.defaultRoute);
    http.createServer(app).listen(config.port, function () {
        console.log(`${config.introMsg} ${config.port}` + cluster.worker.id + " running @ process " + cluster.worker.process.pid + "!");
    });

    // app.listen(config.port, () => {
    //     console.log(`${config.introMsg} ${config.port}`); // back ticks multiline es6 feature
    // })
}