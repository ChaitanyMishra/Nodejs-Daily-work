const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req , res) => {
let count = 1
fs.appendFile("log.txt" , `${(count)}: User Login At : ${Date().toLocaleString()}\n` , (err , data) =>{
    res.end("Hello From Server Again!")
})
count+=1
})

myServer.listen(4000 , () => console.log("Server Started!"))