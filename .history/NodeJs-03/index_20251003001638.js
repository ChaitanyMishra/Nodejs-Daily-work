const exp = require("express");
const http = require("http");
const app = exp();

app.get("/", (req , res)=> res.send("This Is Home Page!"))
app.get("/about" , (req , res) => res.send("This Is About Page!"))



const server = http.createServer(app)

server.listen(3000, () => console.log("Server Ruinning!"))
