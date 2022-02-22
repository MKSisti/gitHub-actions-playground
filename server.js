const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
      "name":"the best api you ever witnessed",
      "data": [1,2,3,4,5,6,7,8]
  })
})

module.exports = app;