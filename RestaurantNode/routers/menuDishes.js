const express = require('express');
const db = require('../config/db');
const menuDishes = require('../buisnesLayer/menuDishesBL');

let router = express.Router();

router.get('/getAll',function (req,res)
 {
  menuDishes.getAll.then(result=>{
    return res.json(result)
  })
})
