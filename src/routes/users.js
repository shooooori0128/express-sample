var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'db',
  user: 'docker',
  password: 'docker',
  database: 'sample'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(mysql)

  return con.connect(function (err) {
    if (err) console.log(err);
  
    console.log('Connected');
  
    const sql = "SELECT * FROM users";
  
    return con.query(sql, function (err, results) {
      if (err) console.log(err);
  
      return res.render('users', { title: 'Users', results: results });
    });
  });
});

module.exports = router;
