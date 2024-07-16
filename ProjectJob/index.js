const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = 10000;
dotenv.config();
const jobRoutes = require('./Routes/job')

// mongoose.connect('mongodb://localhost:27017/Fs-16-17')
// mongoose.connect('mongodb+srv://anchitjulaniyaofficial:KFBsUkeTxvHRuxAL@cluster0.ca1kgtk.mongodb.net/')
console.log(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("MongoDB Connected Successfully"))
.catch((error)=>{console.log("MongoBD Error", error);})

// middleware
app.use(express.json())


// routes
app.use(jobRoutes)

app.listen(port, ()=>{
    console.log(`Application is running at port ${port}`);
})