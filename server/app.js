const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./controllers/controllers.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/:id', db.getUserInfo);

module.exports = app;