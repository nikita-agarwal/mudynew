const mongoose = require('mongoose');

const InvoiceSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true
    }, goods: {
        type: Array,
        required: true
    },  date: {
        type: Date,
        required: true
    } , name: {
        type: String,
        required: true
    }
});

const Invoice = module.exports = mongoose.model('Invoice', InvoiceSchema);