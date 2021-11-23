const axios = require('axios');

const TitleModel = require('./model');

exports.searchTitle = async(req, res) => {
    const { title } = req.params;
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_9392r6dt/${title}`)
            .then(res => res.data);
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}

exports.addTitle = async (req, res, next) => {
    try{
        const createTitle = await TitleModel.create(req.body);
        res.status(201).json(createTitle);
    } catch (err) {
        next(err);
    }
};