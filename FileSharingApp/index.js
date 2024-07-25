const express = require('express');
const mongoose = require('mongoose');
const uuid = require('uuid');
const dotenv = require('dotenv');
const routes = require('./Routes/file')
const app = express();
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.BASE_URL)
.then(()=>{console.log("MonogoDB Successfully Connected");})
.catch(()=>{console.log("Error from MongoDB Connection");})

// middleware
app.use(express.json());

// routes
app.use(routes);

app.listen(1000,()=>{
    console.log(`Server is running`);
})

