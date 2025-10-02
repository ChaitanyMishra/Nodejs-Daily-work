const http = require('http')
const fs = require('fs')
const url = require("url")
const server =  http.createServer((req , res) =>{
        console.log("Server is running!")
        res.writeHead(200,{"Content-Type": "text/plain" })
        // res.end("Server running SuccessFully")
        //  console.log(server);
        if(req.url === "/favicon.ico") return res.end()
        fs.appendFile("log.txt" , `--> User Log In At ${ new Date().toLocaleString()} to ${req.url}\n` , (err,data) =>{
            const myUrl = url.parse(req.url , true)
            console.log(myUrl)
        })
        switch(myUrl.pathname){
            case "/":
                 res.end("HomePAge!")
                 break
            case "/about":
                 res.end("I am From Kanpur")
                 break;
            case "/education":
                res.end("BCA From MPCPS")
                break;
            case "/projects":
                res.end("SnapFetch - Image Search Engine! \nPersonal Portfolio Using React")
            default:
                res.w
                res.end("404 Error! Page Not Found")

        }
        if(req.url === "/"){
           
        }else if(req.url === "/about"){
           
        }else if(req.url === "/education"){
            
        }else{
            
        }
})
 server.listen(3000 , () => {
        console.log("Server Started!")
    });