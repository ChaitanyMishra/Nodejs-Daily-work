const express = require('express')
const app = express()
const port = 8000
const router = express.Router();
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    firstName:{
        
    }
})






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
       return res.status(201).send("This is User Panel")
    }
    next();
}
router.get("/users", isLoggedin , users , (req,res) =>{res.status(201).send("Hello user")})
router.get('/admin' , isLoggedin , admin , (req,res) => {res.send("Hello Admin")})
router.get('/users/1',isLoggedin,users,(req,res) =>{ res.send("Name: chetan mishra")})
app.use("/" , router)
app.get("/" , (req , res) =>{
    res.status(201)
    res.send("Wellcome")
   
})


app.listen(port , (req,data) => console.log("Server Running "))
