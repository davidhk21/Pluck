const express = require('express');

const app = express();
const cors = require('cors');

const db = require('../database/database.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send('it worked!')
})

module.exports = app;