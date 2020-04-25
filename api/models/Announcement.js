const mongoose = require('mongoose');

const announcementLogs = mongoose.Schema({

    dateCreated: {
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
    dateModified: {
        type: Date,
        required: true
    }

});

const announcement = module.exports = mongoose.model('announcement', announcementLogs);
