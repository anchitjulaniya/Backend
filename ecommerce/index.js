const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./Routes/user')
const productRoutes = require('./Routes/product')
const app = express();

mongoose.connect('mongodb://localhost:27017/ecommerce')
.then(()=>{console.log('MongoDB Successfully Connected.')})
.catch(()=>{console.log('MongoDB Error!')})


// middleware
app.use(express.json())


// routes
app.use(userRoutes)
app.use(productRoutes)



app.listen(1000, ()=>{console.log(`Server is running on 1000 port`);})




