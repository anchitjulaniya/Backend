const express = require('express')

const app = express()

const port = 2000;

app.get('/',(req, res)=>{
    res.send('Welcome to my API!')
})

app.listen(port,()=>{
    console.log(`Server is listening at port:${port}`)
})


