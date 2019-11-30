
const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: { type: String, },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model('User', schema);