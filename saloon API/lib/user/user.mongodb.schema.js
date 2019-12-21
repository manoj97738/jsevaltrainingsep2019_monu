const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    username: String,
    email: String,
    password: String,
    createdAtDate: { type: Date, default: Date.now },
    role: {
        type: String,
        enum: ['user', 'admin', 'saloon'],
        default: 'user'
    }

});

module.exports = mongoose.model('User', userSchema);
