const express = require('express');
const db = require('./db');

let router = express.Router();

router.get('/getAll',function (req,res) {
  db.con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    })
  });
  
})
