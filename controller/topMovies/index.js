const axios = require('axios');

exports.searchTopMovies = async(req, res) => {
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/Top250Movies/k_9392r6dt`)
            .then(res => res.data);
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}