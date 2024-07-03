const express = require('express')

const app = express()

const port = 2000;
const users = [
    {
        id: 1,
        name : "John",
        mobno : 1231231233
    },
    {
        id: 2,
        name : "John 2",
        mobno : 2312312331
    },
    {
        id: 3,
        name : "John 3",
        mobno : 3123123321
    },
    
]
app.get('/login',(req, res)=>{
    console.log("LOGIN API CALLED");
    res.json({
        success : true,
        message : "Login GET method called"
    })
    // res.send('Welcome to my API!')
})
app.post('/login',(req, res)=>{
    console.log("LOGIN API CALLED");
    res.json({
        success : true,
        message : "Login Post method called"
    })
})

// app.get('/user',(req,res)=>{

// })
//List Get APIs

// app.get("/user/:id", (req, res)=>{
//     const param = req.params;
//     console.log(param)
//     const data = users.filter((item)=> parseInt(item.id) == param.id)
//     res.json({
//         success: true,
//         message : data
//     })
// })


// using query parameters
app.get("/user", (req, res)=>{
    const param = req.query;
    console.log(param)
    const data = users.filter((item)=> parseInt(item.id) == param.userid)
    res.json({
        success: true,
        message : data
    })
})



app.listen(port,()=>{
    console.log(`Server is listening at port:${port}`)
})


