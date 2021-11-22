const axios = require('axios');
const store = require('./store');

// exports.searchAll = async(req, res) => {
//     const { movie } = req.params;
//     try{
//         const data= await axios.get(`https://imdb-api.com/en/API/SearchAll/k_9392r6dt/${movie}`)
//             .then(res => res.data);
//         res.send(data)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

exports.searchAll = async(req, res) => {
    const { movie } = req.params;
    try{
        const data= await axios.get(`https://imdb-api.com/en/API/SearchAll/k_9392r6dt/${movie}`)
            .then(res => store.add(res))
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }
}