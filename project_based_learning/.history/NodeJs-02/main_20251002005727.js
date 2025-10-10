const http = require("http");
http.createServer((req , res) => {
console.log("New Request Arrive!")
res.end("Server Run SucessFully!")
})

myServer.listen(4000 , () => con "Server Started!")