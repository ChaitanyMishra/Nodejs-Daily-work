const express = require('express')
const app = express()
const user = logi.txt
const port = 8000

const isLoggedin = (req , res , next) => {
    if(user.logIn){
        req.userState = "admin"
        res.send("Wellcome to My page!")
    }else{
        next();
    }
}
const isAdmin = (req , res , next) => {
    if(req.userState === "admin"){
        res.send("This IS the Admin DashBoard!")
    }else{
        req.is
        next()
    }

}
const isUser = (req , res , next) =>{
    if
}
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
