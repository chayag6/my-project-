var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SmS0548598227",
  database: "node"
});

module.exports = {con};

// create a data base £££££££££££££££££££££££££££££££££££££££££££££££££££££££££££££
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE node", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


//create table £££££££££££££££££££££££££££££££££££££££££££££££££
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


//alter table££££££££££££££££££££££££££££££££££££££££££££££££££££
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "ALTER TABLE cu
