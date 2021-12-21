const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    } , stateCode: {
        type: String,
        required: true
    }
});

const State = module.exports = mongoose.model('State', StateSchema);