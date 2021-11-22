const SerieModel = require('./model');

const axios = require('axios');

exports.searchSeries = async(req, res) => {
    const { series } = req.params;
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/SearchSeries/k_9392r6dt/${series}`)
            .then(res => res.data);
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}

exports.addSerie = async (req, res, next) => {
    try{
        const createSerie = await SerieModel.create(req.body);
        res.status(201).json(createSerie);
    } catch (err) {
        next(err);
    }
};