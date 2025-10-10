const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const port = 3001;
app.use(express.urlencoded({extended : false}))
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

app.get("/users/id/:id" , (req , res) => {
    const id = Number(req.params.id)
    const user = users.filter((data) => data.id === id)
    console.log({email : user[0].email})
    res.json({email : user[0].email})
})

app.get("/users/:id" , (req , res) => {
    const id = Number(req.params.id);
    const userData = users.find((user) => user.id === id)
    console.log(userData)
    res.json(userData)
})

app.post("/api/users" , (req , res)=> {
    const body = req.body
    console.log(body)
    return res.json({status : "pending"})

})

app.put("/api/users" , (req , res ) =>{

    console.log("Edit User Detail")
})

app.patch("/api/users/:id" , (req , res)=>{
    console.log("edit user detail")
})
app.delete("/api/users/:id" , (req , res) => {
    console.log("delete user data")
})

app.listen(port , (req , res)=>console.log("Server started!"))