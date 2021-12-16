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

exports.searchAndSaveName = async (req, res, next) =>{
    try {
        const { name } = req.params;
        const data= await axios.get(`https://imdb-api.com/en/API/SearchName/k_9392r6dt/${name}`)
            .then(res => res.data)
        if (!data) {
            return res.status(404)
        }
        const newData = await Promise.all(
            data.results.map(async (item) => {
                const saveAllName = new NameModel({
                    idIMDB : item.id,
                    resultType : item.resultType,
                    title : item.title,
                    description : item.description,
                });
                return await saveAllName.save();
            })
        )
        res.status(201).json(newData);
    } catch (err) {
        next(err);
    }
};