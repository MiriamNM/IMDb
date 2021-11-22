const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));
}

module.exports = connect;