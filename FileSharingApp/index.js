const express = require('express');
const mongoose = require('mongoose');
const uuid = require('uuid');
const dotenv = require('dotenv');
const routes = require('./Routes/file')
const app = express();

mongoose.connect('mongodb://localhost:27017')
.then(()=>{console.log("MonogoDB Successfully Connected");})
.catch(()=>{console.log("Error from MongoDB Connection");})

// middleware
app.use(express.json());

// routes
app.use(routes);

app.listen(10000,()=>{
    console.log(`Server is running on port 10000`);
})

