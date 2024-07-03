const express = require('express')
const app = express()
const randomImages = require('./data')

app.get('/randomImage',(req,res)=>{
const random = Math.floor(Math.random()*randomImages.length)

return res.status(200).json(randomImages[random])
})

app.get('/randomImage/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)

    if(!Number(id) || Number(id)> randomImages.length){
        return res.status(200).json({status: false, message:"Invalid API"})
    }
     return res.status(200).json(randomImages.find(image => image.id == id))
})
app.listen(1000, ()=>{
    console.log("Server is running on Port 1000")
})


