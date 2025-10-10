const express = require('express')
const app = express()
const port = 8000
const router = express.Router();
const user = {logedIn : true}
const userState = {isAdmin : false}
const isLoggedin = (req , res , next) =>{
    if(user.logedIn){
        req.userState = userState
    }
    
    next();
}
const admin = (req , res , next) => {
    if(req.userState?.isAdmin){
       return res.send("THis Is Admin Panel")
    }
    next();
    
}
const users = (req,res,next) =>{
    if(req.userState && !req.userState.isAdmin){
       return res.send("This is User Panel")
    }
    next();
}

app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})


app.listen(port , (req,data) => console.log("Server Running "))
