const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Integer,
        required: true
    },
    OrderBy: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Float,
        required: true
    },
    dateOrder: {
        type: Date,
        required: true
    },
    dateOfDelivery: {
        type: Date,
        required: true
    }, 
    status: {
        type: String,
        required: true
    }

});

const order = module.exports = mongoose.model('Order', OrderSchema);
