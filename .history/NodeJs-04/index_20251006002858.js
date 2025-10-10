const express = require('express')
const app = express()
const port = 8000
const user = {isLoggedin : true}
const userState = {isAdmin : true}
const isLoggedin = (req , res , )
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
