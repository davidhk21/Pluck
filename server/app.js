const express = require('express');

const app = express();
const cors = require('cors');

const db = require('./controllers/controllers.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/:id', db.getUserInfo);

module.exports = app;