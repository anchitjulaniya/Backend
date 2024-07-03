const express = require('express')
const app = express()
const randomImages = []

app.get('/randomImage',(req,res)=>{
const random = Math.floor(Math.random()*randomImages.length())

return req.statusCode(200).json(randomImages[random])
})

app.get('/randomImage/:id',(req,res)=>{
    const id = req.params;
    console.log(id)

    if(!Number(id)){
        return req.statusCode(200).json({status: false, message:"Invalid API"})
    }
     return req.status(200).json(randomImages.find(image => image.id == id))
})



app.listen(1000, ()=>{
    console.log("Server is running on Port 1000")
})


