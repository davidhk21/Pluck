const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./controllers/controllers.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- ROUTES ---------- //

// GET ROUTES

app.get('/api/user/:id', db.getUserInfo);

app.get('/api/user/:id/incompleted-tasks', db.getIncompletedTasks);

app.get('/api/user/:id/completed-tasks', db.getCompletedTasks);

app.get('/api/quotes', db.getQuote);

// POST ROUTES

app.post('/api/user/:id/tasks', db.addTask);

// UPDATE ROUTES

// app.put('/api/user/:id', db.updateUserInfo);

// app.put('/api/user/:id/tasks', db.updateTask);

// DELETE ROUTES

// app.delete('/api/user/:id/tasks', db.deleteTask);

module.exports = app;
