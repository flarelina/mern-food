const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        required: true
    },
    /*message: {
        type: String,
        required: true
    },
    postedby: {
        type: String,
        required: true
    },*/
    dateModified: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const user = module.exports = mongoose.model('user', userschema);
