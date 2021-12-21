const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    customerId: {
        type: String,
        required: true
    }, ammount: {
        type: Number,
        required: true
    },  date: {
        type: Date,
        required: true
    }
});

const Sale = module.exports = mongoose.model('Sale', SaleSchema);