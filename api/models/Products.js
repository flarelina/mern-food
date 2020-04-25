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
    dateCreated: {
        type: Date,
        required: true
    },
    itemPhoto: {
        type: Blob,
        required: true
    },
    itemCode: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    price: {
        type: Float,
        required: true
    }

});

const products = module.exports = mongoose.model('Products', productSchema);
