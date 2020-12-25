const db = require('../../database/database.js');

const getUserInfo = (req, res) => {
  db.query('SELECT * FROM user WHERE id=?', [req.params.id], (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  })
}

module.exports = {
  getUserInfo,
}