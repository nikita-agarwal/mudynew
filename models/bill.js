const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    customerId: {
        type: String,
        required: true
    }, ammount: {
        type: Number,
        required: true
    },  date: {
        type: Date,
        required: true
    }, goods: {
        type: Array,
        required: true
    }
});

const Bill = module.exports = mongoose.model('Bill', BillSchema);
