require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

db.getConnection(() => console.log('Connected to the Pluck MySQL database'));

module.exports = db;