const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Integer,
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
    Item_Photo: {
        type: Blob,
        required: true
    },
    Item_Code: {
        type: String,
        required: true
    },
    Item_Description: {
        type: String,
        required: true
    },
    Price: {
        type: Float,
        required: true
    }

});

const products = module.exports = mongoose.model('Products', productSchema);
