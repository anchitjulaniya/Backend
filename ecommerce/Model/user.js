const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : addressSchema,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ["CUSTOMER", "SELLER", "ADMIN"] //ENUM give option to choose 
    }
    // , token : {
    //     type : addressSchema,
    //     required : true
    // }
})

const UserSchema = mongoose.model("user", userSchema);

module.exports = UserSchema;