const db = require('../../database/database.js');

const getUserInfo = (req, res) => {
  db.query('SELECT * FROM user WHERE id=?', [req.params.id], (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  })
}

module.exports = {
  getUserInfo,
}