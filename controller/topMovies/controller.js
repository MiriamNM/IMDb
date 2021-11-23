const axios = require('axios');

const TopMovieModel = require('./model');

exports.searchTopMovie = async(req, res) => {
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/Top250Movies/k_9392r6dt`)
            .then(res => res.data);
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}

exports.addTopMovie = async (req, res, next) => {
    try{
        const topMovie = await TopMovieModel.create(req.body);
        res.status(201).json(topMovie);
    } catch (err) {
        next(err);
    }
};