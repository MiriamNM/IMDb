require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    // cors: process.env.CORS,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST || '0.0.0.0',
    db_name: process.env.DB_NAME,
    db_url: process.env.DB_URL,
};

module.exports = { config };