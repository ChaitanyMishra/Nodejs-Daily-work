const http = require('http')
const fs = require('fs')
const server =  http.createServer((err , res) =>{
        console.log("Server is running!")
        console.log(req);
        res.writeHead(200,{"Content-Type": "text/plain" })
        res.end("Server running SuccessFully")
        console.log(server);

})