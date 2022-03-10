const db = require('../config/db');
// const res = require('express/lib/response');

exports.getAll = function()
{
  return new Promise((resolve,reject)=>{
    // db.con.connect(function(err) {
    //   if (err) throw err;
      db.query("SELECT * FROM restaurant.dose_type", function (err, data, fields) {
        if (err) {
          reject(err)
          console.log(data)
        }else
        {
          resolve(data)
        console.log(data)
      };
      })
    });
    
  
  // })
}