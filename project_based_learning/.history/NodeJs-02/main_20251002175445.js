const http = require('http')
const fs = require('fs')
const server =  http.createServer((err , res) =>{
    if(err){
        console.log("Error! " + err)
    }else{
        console.log("Server is running!")
        console.log(req);
        res.writeHead(200,{"Content-Type": "text/plain" })
        res.end("Server running SuccessFully")
        console.log(server);
    }
    server.listen(3000 , () => {
        console.log("Server Run")
    })

})