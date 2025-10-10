const exp = require("express");
const http = require("http");
const app = exp;

app.get("/", (req , res)=> res.send("This Is Home Page!"))
app.get("/about" , (req , res) => res)

http.createServer(app)
