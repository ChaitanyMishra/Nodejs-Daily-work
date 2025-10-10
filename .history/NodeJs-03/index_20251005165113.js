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
app.get("/users/username/:username" , (req , res) => {
    const username = req.params.username
    const userdata = users.find((user) => user.first_name.toLowerCase() === username.toLowerCase())
    res.json(userdata)
})
app.get("/users/name/:name" , (req , res) => {
    const username = req.params.name;
    res.send(`Hello ${username}`)
})

app.get("/id/:id" , (req , res) => {
    const id = Number(req.params.id)
    const userEmail = users.find((email) => email.email.toLowerCase() === )


})

app.listen(port , (req , res)=>console.log("Server started!"))