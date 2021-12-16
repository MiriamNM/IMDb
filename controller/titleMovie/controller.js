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

exports.searchAndSaveTitle = async (req, res, next) => {
    try {
        const { title } = req.params;
        const data= await axios.get(`https://imdb-api.com/en/API/SearchTitle/k_9392r6dt/${title}`)
            .then(res => res.data);
        if (!data) {
            return res.status(404)
        }
        const newData = await Promise.all(
            data.results.map(async (item) => {
                const saveAllTitle = new TitleModel({
                    idIMDB : item.id,
                    resultType : item.resultType,
                    title : item.title,
                    description : item.description,
                });
                return await saveAllTitle.save();
            })
        )
        res.status(201).json(newData);    
    } catch (err) {
        next(err);
    }
}