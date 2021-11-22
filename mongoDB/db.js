const mongoose = require('mongoose');

const { config } = require('../config');

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connecting')
    } catch (err) {
        console.error('Error connecting mongoDB')
        console.error(err)
    }
};

module.exports = { connect };