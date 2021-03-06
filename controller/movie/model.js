const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
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

const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = MovieModel;