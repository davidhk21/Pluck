const db = require('../../database/database.js');

// ---------- GET REQUESTS ---------- //

const getUserInfo = (req, res) => {
  db.query('SELECT * FROM user WHERE id=?', [req.params.id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  });
};

const getIncompletedTasks = (req, res) => {
  db.query('SELECT * FROM tasks WHERE user_id=? AND completed=?', [req.params.id, false], (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  });
};

const getQuote = (req, res) => {
  const randomId = Math.floor(Math.random() * 5) + 1;
  db.query('SELECT * FROM quotes WHERE id=?', [randomId], (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data[0].quote);
  });
};

// ---------- POST REQUESTS ---------- //

const addTask = (req, res) => {
  const { task, value, category, completed } = req.body;
  db.query('INSERT INTO tasks (task, value, category, completed, user_id) VALUES (?, ?, ?, ?, ?);', [task, value, category, completed, req.params.id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  });
};

// ---------- PUT REQUESTS ---------- //

// ---------- DELETE REQUESTS ---------- //

module.exports = {
  getUserInfo,
  getIncompletedTasks,
  getQuote,
  addTask,
};
