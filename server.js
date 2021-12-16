const express = require('express');
const app = express();
const cors = require('cors');
const mongoDB = require('./mongoDB/db');
const { config } = require('./config');
const router = require('./network/routes');

mongoDB.connect();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const whitelist = ['http://localhost:'+`${config.port}`, 'hhttps://imdb-api.com/en/API/'];
app.use(cors(whitelist));
app.use((error, req, res, next) => {
    res.status(500).json({message: error.message});
});

app.use('/api', router);

app.listen(config.port);
console.log('The app listening at http://localhost:'+`${config.port}`)