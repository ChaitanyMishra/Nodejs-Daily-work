const http = require("http");
http.createServer((req , res) => {
console.log("New Request Arrive!")
res.end(console.log("Server Run SucessFully!"))
})