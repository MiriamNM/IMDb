const express = require('express');
const app = express();
const cors = require('cors');

const { config } = require('./config');
const db = require('./db');
const router = require('./network/routes');

db(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

const whitelist = ['http://localhost:'+`${config.port}`, 'hhttps://imdb-api.com/en/API/'];
app.use(cors(whitelist));

app.use('/api', router);

app.listen(config.port);
console.log('The app listening at http://localhost:'+`${config.port}`)