const http = require('http')
const fs = require('fs')
const server =  http.createServer((req , res) =>{
        console.log("Server is running!")
        res.writeHead(200,{"Content-Type": "text/plain" })
        res.end("Server running SuccessFully")
        //  console.log(server);
        fs.appendFile("log.txt" , `User Log In At ${ new Date().toLocaleString()}` , (err,data) =>{
            if(err){
                throw new Error(err)
            }else{
                // console.log(data)
            }
        })
        if(req.url === "/"){
            res.end("HomePAge!")
        }else if
})
 server.listen(3000 , () => {
        console.log("Server Started!")
    });