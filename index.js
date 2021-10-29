const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./database/db')

const PORT = process.env.PORT || 3000


//routes
app.use('/api/v1/tasks', require('./routes/tasks'))
app.get('/', (req, res) => {
  res.send('hello world')
})
// app.listen(PORT, ()=> console.log(`app is listening in port ${PORT}`))
const connect = async() => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, ()=> console.log(`app is listening in port ${PORT}`))
  }catch(error){
    console.log(error);
  }
}
connect()