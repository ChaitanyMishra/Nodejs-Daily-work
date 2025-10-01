const http = require("http");
const myServer = http.createServer((req , res) => {
console.log("New Request Arrive!")

res.end("Server Run SucessFully!")
})

myServer.listen(4000 , () => console.log("Server Started!"))