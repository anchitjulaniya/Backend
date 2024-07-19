const path = require('path')
const multer = require('multer')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const uuid = require('uuid');
const Filemodel = require('../Model/file') 

dotenv.config();

const transporter = nodemailer.createTestAccount({
    host : "localhost",
    port : "10000",
    secure : false,
    auth : {
        username : "",
        password : ""
    }
})

const uploadForPath = "uploads";

const saveFile = (req, res)=>{
    try{
        console.log(req.body);
        res.json({
            status : true,
            message : "File Successfully uploaded."
        })

    }catch(error){
        res.json({
            status : false,
            message : "Something went wrong. Please try again!"
        })
    }
}

const downloadFile = (req, res)=>{
    try{
        res.json({
            status : true,
            message : "File Successfully Downloaded."
        })

    }catch(error){
        res.json({
            status : false,
            message : "Something went wrong. Please try again!"
        })
    }
}

const deleteFile = (req, res)=>{
    try{
        res.json({
            status : true,
            message : "File Successfully deleted."
        })

    }catch(error){
        res.json({
            status : false,
            message : "Something went wrong. Please try again!"
        })
    }
}

const sendFile = (req, res)=>{
    try{
        res.json({
            status : true,
            message : "File Send Successfully."
        })

    }catch(error){
        res.json({
            status : false,
            message : "Something went wrong. Please try again!"
        })
    }
}

const fileController = {
    saveFile,
    downloadFile,
    deleteFile,
    sendFile
}


module.exports = fileController;
