const express = require('express');
const app = express();
const port = 3001;

app.get("/" ,(req,res) =>{
    res.send(`<h1>Wellcome TO My Website </h1>`)
})
app.get()
app.get("/user/name/:name" , (req , res) => {
    const username = req.params.name;
    res.send(`Hello ${username}`)
})
app.listen(port , (req , res)=>console.log("Server started!"))