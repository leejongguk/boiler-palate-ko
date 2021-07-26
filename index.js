
const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://JKLee:123qwe@boilerplate.e692x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  userNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() =>console.log('MongoDB Connected...'))
  .catch(err =>(console.log(err))



app.get('/', (req, res) => {
  res.send('Hello SOSO!~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})