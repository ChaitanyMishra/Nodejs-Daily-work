const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req , res) => {
console.log("New Request Arrive!")
console.log(req.headers)
res.end("Server Run SucessFully!")
})

myServer.listen(4000 , () => console.log("Server Started!"))