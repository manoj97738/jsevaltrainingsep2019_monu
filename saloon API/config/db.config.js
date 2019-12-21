const mongoose = require('mongoose');

class DBConfig {
    constructor() {
        mongoose.connect(this.mongoURI, { useNewUrlParser: true });
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function () {
            // we're connected!
            console.log(`We are connecected`)
        });
    }
    get mongoURI() {
        return typeof (process.env.mongoURI) !== 'undefined' 
                ? process.env.mongoURI 
                : 'mongodb://localhost:27017/saloondb';
    }
}
module.exports = new DBConfig();