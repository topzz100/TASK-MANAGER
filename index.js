const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./database/db')
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

const PORT = process.env.PORT || 3000

app.use(require('cors')())
app.use(express.static('./public'));
app.use(express.json())

//routes
app.use('/api/v1/tasks', require('./routes/tasks'))

app.use(notFound);
app.use(errorHandlerMiddleware);

const connect = async() => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, ()=> console.log(`app is listening in port ${PORT}`))
  }catch(error){
    console.log(error);
  }
}
connect()