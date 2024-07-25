const express = require('express')
const app = express();
const mongoose = require('mongoose')
const routes = require('./Routes/post')
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.BASE_URL)
.then(()=>{console.log('DB connected Successfully')})
.catch(()=>{console.log('Mongoose Error')})

// middleware
app.use(express.json())

// routes
app.use(routes)

app.listen(1000,()=>{
    console.log("server is running")
})