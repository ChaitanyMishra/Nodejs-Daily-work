const express = require('express')
const app = express()
const port = 8000
const user = {logedIn : true}
const userState = {isAdmin : true}
const isLoggedin = (req , res , next) =>{
    if(user.logedIn){
        req.userState = userState
    }
    next();
}
const admin = (req , res , next) => {
    if(userState){
        res.send("THis Is Admin Panel")
    }
    next()
}
const users = (req,res,next) =>{
    if(!userState){
        res.send("This is User Panel")
    }
    next();
}
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
