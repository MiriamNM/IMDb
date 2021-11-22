const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    Movie: {
        type: Object,
    },
});

const model = mongoose.model('Movie', mySchema);

module.exports = model;