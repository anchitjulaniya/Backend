const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    content : {
        type : String,
        required : true
    },
    uuid : {
        type : String,
        unique : true
    }
})

const postModel = new mongoose.model('post',postSchema)

module.exports = postModel