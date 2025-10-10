const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req , res) => {
fs.appendFile("log.txt" , `User Login At : ${Date.now()}` , (err , res) =>{
    res.end
})
})

myServer.listen(4000 , () => console.log("Server Started!"))