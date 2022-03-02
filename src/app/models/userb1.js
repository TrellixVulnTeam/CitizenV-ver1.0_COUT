const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserB1 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


module.exports = mongoose.model('UserB1', UserB1)