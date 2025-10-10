const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req , res) => {
fs.appendFile("log.txt" , `User Login At : ${Date.now().to}\n` , (err , data) =>{
    res.end("Hello From Server Again!")
})
})

myServer.listen(4000 , () => console.log("Server Started!"))