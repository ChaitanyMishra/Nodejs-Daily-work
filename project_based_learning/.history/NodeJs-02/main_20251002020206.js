const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req , res) => {
let count = 1
fs.appendFile("log.txt" , `${count =count+1}: User Login At : ${Date().toLocaleString()}\n` , (err , data) =>{
    res.end("Hello From Server Again!")
})
})

myServer.listen(4000 , () => console.log("Server Started!"))