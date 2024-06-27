const { log } = require('console');
const http = require('http');

const myServer = (req, res)=>{
    console.log("Request received");
    console.log(req.url); //where request received
    // const response = {
    //     success : true,
    //     message : 'This is my first API'
    // }
    if(req.url === "/login"){
        res.end(JSON.stringify({
                success : true,
                message : 'This is my first API'
            }))
    }else if(req.url === "/logout"){
        res.end("Logout API called")
    }else if(res.url === "/user-list"){
        res.end("User-List Api called")
    }else{
        res.end(JSON.stringify({
            success: false,
            message : "Page not Found"
        }))
    }

}

const server = http.createServer(myServer);
server.listen(1000,()=>{
    console.log("Server is up and running at port 1000");
})