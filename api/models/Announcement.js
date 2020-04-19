const mongoose = require('mongoose');

const announcementLogs = mongoose.Schema({

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
    }

});

const announcement = module.exports = mongoose.model('announcement', announcementLogs);
