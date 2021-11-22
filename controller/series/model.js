const mongoose = require('mongoose');

const SeriesSchema = new mongoose.Schema({
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

const SerieModel = mongoose.model('Serie', SeriesSchema);
module.exports = SerieModel;