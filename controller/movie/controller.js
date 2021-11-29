const axios = require('axios');

const MovieModel = require('./model');

exports.searchMovie = async(req, res) => {
    const { movie } = req.params;
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/SearchAll/k_9392r6dt/${movie}`)
            .then(res => res.data)
        res.send(data);
    }
    catch (err) {
        console.log(err)
    }
}

exports.addMovie = async (req, res, next) => {
    try{
        const createMovie = await MovieModel.create(req.body);
        res.status(201).json(createMovie);
    } catch (err) {
        next(err);
    }
};

exports.searchAndSave = async (req, res, next) => {
    try {
        const { movie } = req.params;
        const data= await axios.get(`https://imdb-api.com/en/API/SearchAll/k_9392r6dt/${movie}`)
            .then(res => res.data)
        if (!data) {
            return res.status(404)
        }
        const newData = await Promise.all(
            data.results.map(async (item) => {
                const saveAllMovie = new MovieModel({
                    idIMDB : item.id,
                    resultType : item.resultType,
                    title : item.title,
                    description : item.description,
                });
                return await saveAllMovie.save();
            })
        )
        res.status(201).json(newData);
    } catch (err) {
        next(err);
    }
};