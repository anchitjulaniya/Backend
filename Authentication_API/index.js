const express = require('express')

const app = express()
const port = 1000


app.get('/signup',(req, res)=>{

    

    req.status(200).json({status: true, message:"Account Created successfully"})

})


app.get('/login',(req, res)=>{



    req.status(200).json({status: true, message:"Loggedin successfully"})

})



app.listen(port, ()=>{
    console.log(`Server is listening on ${port} port`)
})