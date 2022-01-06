const express = require('express');
const app = express()
const port = 3000
const db = require('./config/db');
const menuDishes = require('./routers/menuDishes');
const dishes = require('./routers/dishes');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.getAllData('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/menuDishes",menuDishes)
app.use("/dishes",dishes)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
