const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const port = 3001;

app.get("/" ,(req,res) =>{
    res.send(`<h1>Wellcome TO My Website </h1>`)
})
app.get("/api/users" , (req,res) => {
    const userdata = users
    res.json(userdata)
    
})
app.get("/users/username" , (req , res) => {
    const userdata = users
    const first_name = users.first_name
})
app.get("/users/name/:name" , (req , res) => {
    const username = req.params.name;
    res.send(`Hello ${username}`)
})
app.listen(port , (req , res)=>console.log("Server started!"))