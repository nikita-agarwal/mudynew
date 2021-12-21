const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, pan: {
        type: String,
        required: false
    }, gst: {
        type: String,
        required: false
    }, mobileNumber: {
        type: String,
        required: true
    }, state: {
        type: String,
        required: true
    }, stateCode: {
        type: String,
        required: true
    }, address: {
        type: String,
        required: true
    }, shippingAddress: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    subRates: {
        type: Array,
        required: false
    }

});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);