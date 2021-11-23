const axios = require('axios');

const NameModel = require('./model');

exports.searchName = async(req, res) => {
    const { name } = req.params;
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/SearchName/k_9392r6dt/${name}`)
            .then(res => res.data);
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}

exports.addName = async (req, res, next) => {
    try{
        const createName = await NameModel.create(req.body);
        res.status(201).json(createName);
    } catch (err) {
        next(err);
    }
};