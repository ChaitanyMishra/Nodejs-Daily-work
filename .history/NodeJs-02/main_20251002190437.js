const http = require('http')
const fs = require('fs')
const server =  http.createServer((req , res) =>{
        console.log("Server is running!")
        res.writeHead(200,{"Content-Type": "text/plain" })
        // res.end("Server running SuccessFully")
        //  console.log(server);
        fs.appendFile("log.txt" , `--> User Log In At ${ new Date().toLocaleString()}\n` , (err,data) =>{
            if(err){
                throw new Error(err)
            }else{
                // console.log(data)
            }
        })
        if
        if(req.url === "/"){
            res.end("HomePAge!")
        }else if(req.url === "/about"){
            res.end("I am From Kanpur")
        }else if(req.url === "/education"){
            res.end("BCA From MPCPS")
        }else{
            res.end("404 Error! Page Not Found")
        }
})
 server.listen(3000 , () => {
        console.log("Server Started!")
    });