var db = require("./connection")

var orm = {

  selectAll: function (cb) {
    db.query("SELECT * FROM burgers", function (err, results) {
      if (err) throw err
      cb(results)
    })
  },
  insertOne: function (burger, cb) {
    db.query("INSERT INTO burgers SET ?", burger, function (err, results, fields) {
      if (err) throw err;
      cb([burger, results.insertId])
    });
  },
  updateOne: function (burger, cb) {
    db.query('UPDATE burgers SET devoured = ? WHERE id = ?', [burger.devoured, burger.id], function (err, results, fields) {
      if (err) throw err;
      cb(burger)
    })
  }
}



module.exports = orm;