const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    customerId: {
        type: String,
        required: true
    }, ammount: {
        type: Number,
        required: true
    },  date: {
        type: Date,
        required: true
    }, mode: {
        type: String,
        required: true
    }
});

const Payment = module.exports = mongoose.model('Payment', PaymentSchema);