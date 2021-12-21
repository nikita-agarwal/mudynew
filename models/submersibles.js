const mongoose = require('mongoose');

const SubmersibleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Submersible = module.exports = mongoose.model('Submersible', SubmersibleSchema);