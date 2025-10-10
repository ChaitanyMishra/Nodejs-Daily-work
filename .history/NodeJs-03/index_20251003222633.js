const exp = require("express");
const http = require("http");
const app = exp();
const users = require("./MOCK_DATA.json")

app.get("/", (req , res)=> res.send(`<h1>This Is HomePage</h1>`))
app.get("/about" , (req , res) => res.send("This Is About Page!" + req.query.name))
app.get("/education" , (req , res)=> res.send("This Is Education Page"))
app.get("/api/users" , (req , res) => res.json(users) )
app.get()

app.listen(4000 , ()=> console.log("Server Running At 4000 Port"))
