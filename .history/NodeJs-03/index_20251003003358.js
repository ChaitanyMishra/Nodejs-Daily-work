const exp = require("express");
const http = require("http");
const app = exp();

app.get("/", (req , res)=> res.send("This Is Home Page!"))
app.get("/about" , (req , res) => res.send("This Is About Page!" + req.query.name))
app.get("/education" , (req , res)=> res.send("This Is Education Page"))

app.listen(4000 , ()=> console,log("Server Running At 4000 "))
