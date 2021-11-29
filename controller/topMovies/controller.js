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

exports.searchAndSaveTopMovies = async (req, res, next) => {
    try {
        const data= await axios.get(`https://imdb-api.com/en/API/Top250Movies/k_9392r6dt`)
            .then(res => res.data);
        if (!data) {
            return res.status(404)
        }
        const newData = await Promise.all(
            data.items.map(async (item) => {
                const saveTopMovies = new TopMovieModel({
                    idIMDB : item.id,
                    year : item.year,
                    title : item.title,
                    rank : item.rank,
                });
                return await saveTopMovies.save();
            })
        )
        res.status(201).json(newData);
    } catch (err) {
        next(err);
    }
}