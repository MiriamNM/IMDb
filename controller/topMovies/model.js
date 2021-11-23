const mongoose = require('mongoose');

const TopMovieSchema = new mongoose.Schema({
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

const TopMovieModel = mongoose.model('Top Movie',  TopMovieSchema);
module.exports = TopMovieModel;