const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title : {
        type: string,
        required: true,
        unique: true
    },
    description :{
        type: string,
        default : "Not Available"
    },
    company : {
        type: string,
        required: true
    },
    location : {
        type: string,
        required: true
    },
    salary : {
        type:Number,
        required : true,
    }
})


module.exports = jobSchema