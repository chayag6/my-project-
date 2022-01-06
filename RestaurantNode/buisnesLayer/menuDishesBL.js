const db = require('../config/db');


exports.getAll = function()
{
  return new Promise(resolve,reject=>{
    db.con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM customers", function (err, data, fields) {
        if (err) {
          reject(err)
        }else
          resolve(data)
        console.log(data);
      })
    });
  
  })

}

