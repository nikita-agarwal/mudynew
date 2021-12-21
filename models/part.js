const mongoose = require('mongoose');

const PartSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }, number: {
        type: String,
        required: true
    }, material: {
        type: String,
        required: false
    }, description: {
        type: String,
        required: true
    }, moc: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

});

const Part = module.exports = mongoose.model('Part', PartSchema);