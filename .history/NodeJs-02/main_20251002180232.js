const http = require('http')
const fs = require('fs')
const server =  http.createServer((req , res) =>{
        console.log("Server is running!")
        res.writeHead(200,{"Content-Type": "text/plain" })
        res.end("Server running SuccessFully")
        //  console.log(server);
        fs.writeFile("log.txt" , `User Log In At ${ Date.now }`)
})
 server.listen(3000 , () => {
        console.log("Server Started!")
    });