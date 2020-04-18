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
    date_created: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    postedby: {
        type: String,
        required: true
    },
    date_modified: {
        type: Date,
        required: true
    },
    date_all: {
        type: Date,
        required: true
    }

});

const user = module.exports = mongoose.model('user', userschema);
