const express = require('express');
const db = require('../config/db');
const menuDishes = require('../buisnesLayer/menuDishesBL');

let router = express.Router();

router.route('/dishes')
.get((req,res)=>
 {
  menuDishes.getAll().then(result=>{
     res.json(result)
  })
})
module.exports = router;
