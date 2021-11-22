const axios = require('axios');

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