const axios = require('axios');

const SerieModel = require('./model');

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

exports.searchAndSaveSeries = async (req, res, next) => {
    try {
        const { series } = req.params;
        const data= await axios.get(`https://imdb-api.com/en/API/SearchSeries/k_9392r6dt/${series}`)
            .then(res => res.data);
        if (!data) {
            return res.status(404)
        }
        const newData = await Promise.all(
            data.results.map(async (item) => {
                const saveAllSerie = new SerieModel({
                    idIMDB : item.id,
                    resultType : item.resultType,
                    title : item.title,
                    description : item.description,
                });
                return await saveAllSerie.save();
            })
        )
        res.status(201).json(newData);
    } catch (err) {
        next(err);
    }
};