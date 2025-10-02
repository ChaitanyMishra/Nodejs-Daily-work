const http = require('http')
const fs = require('fs')
const server =  http.createServer((req , res) =>{
        console.log("Server is running!")
        res.writeHead(200,{"Content-Type": "text/plain" })
        res.end("Server running SuccessFully")
        //  console.log(server);
        fs.appendFile("log.txt" , `-> User Log In At ${ new Date().toLocaleString()}\n` , (err,data) =>{
          if(req.url === "/"){
            console.log("Home Page!")
          }else if(req.url )
        })
})
 server.listen(3000 , () => {
        console.log("Server Started!")
    });