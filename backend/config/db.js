const { Pool } = require("pg");

// dotenv config
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
    console.log('Connected');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};