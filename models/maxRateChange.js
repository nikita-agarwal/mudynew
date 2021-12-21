const mongoose = require('mongoose');

const MaxRateChangeSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    }
});

const MaxRateChange = module.exports = mongoose.model('MaxRateChange', MaxRateChangeSchema);