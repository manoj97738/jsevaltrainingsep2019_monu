const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:  { type: String, required:true}, // String is shorthand for {type: String}
    username: { type: String, required:true},
    email: { type: String, required:true},
    password: { type: String, required:true},
    createdAtDate: { type: Date, default: Date.now },
    role: {
        type: String,
        enum: ['user', 'admin', 'saloon'],
        default: 'user'
    }

});

module.exports = mongoose.model('User', userSchema);
