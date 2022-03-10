const express = require('express');
const app = express()
const port = 3005
require('./config/db');
const menuDishes = require('./routers/menuDishes');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json());
app.use("/api/restaurant",menuDishes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// const dishes = require('./routers/dishes');

// })
// app.getAllData('/', (req, res) => {
//   res.send('Hello World!')
// })
