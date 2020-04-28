const mongoose = require('mongoose');

const LogsSchema = mongoose.Schema({

    transactionMessage: {
        type: String,
        required: true
    },
    dateCreated: {
        type: date,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    remarks: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

const transactionLog = module.exports = mongoose.model('transactionLogs', LogsSchema);
