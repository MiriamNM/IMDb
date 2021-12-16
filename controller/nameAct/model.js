const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    idIMDB: {
        type: String,
        required: true,
    },
    resultType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const NameModel = mongoose.model('Name', NameSchema);
module.exports = NameModel;