
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 소정이~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})