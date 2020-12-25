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

// ---------- PUT REQUESTS ---------- //

// ---------- DELETE REQUESTS ---------- //

module.exports = {
  getUserInfo,
  getQuote,
};
