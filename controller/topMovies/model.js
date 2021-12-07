const mongoose = require('mongoose');

const TopMovieSchema = new mongoose.Schema({
    idIMDB: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
        required: true,
    },
})

const TopMovieModel = mongoose.model('TopMovie',  TopMovieSchema);
module.exports = TopMovieModel;