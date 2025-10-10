const express = require('express');
const app = express();
const port = 3001;

app.get("/" ,(req,res) =>{
    res.send(`<h1>Wellcome TO My Website </h1>`)
})

app.get("/user/name/:name" , (req , res) => {
    res.send(`Hello ${name}`)
})
app.listen(port , (req , res)=>console.log("Server started!"))