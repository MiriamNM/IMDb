const Model = require('./model');

function addMovie(res) {
    const theMovie = new Model(res);
        theMovie.Movie = res;
    return theMovie.save();
}

function getMovie() {
    return Model.find();
}

module.exports = {
    add: addMovie,
    list: getMovie,
}