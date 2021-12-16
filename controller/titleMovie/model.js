const mongoose = require('mongoose');

const TitleSchema = new mongoose.Schema({
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

const TitleModel = mongoose.model('Title', TitleSchema);
module.exports = TitleModel;