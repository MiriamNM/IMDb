const axios = require('axios');

exports.searchNameAct = async(req, res) => {
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