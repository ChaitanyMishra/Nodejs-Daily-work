const express = require('express')
const app = express()
const port = 8000
const router = express.Router();
const mongoose = require('mongoose')

mongoose.connect('' mongodb://127.0.0.1:27017/mongodb-test' , {
      useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( () =>console.loh( "MongoDB COnnected!"))
.catch(err => console.log("SOmthing Went Wrong" , err))

// Step - 01 Create Schema of your db - Schema = Structure of Your Db like name , email , gender
const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    midName : {
        type : String,
        required : false
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    jobTitle : {
        type : String ,
        required : true,
    }
})

// Step - 02 Create model Based on Schema - use mongoose.model and pass your model name hear it is user and pass the userSchema now
// You can access userSchema using user
const user = mongoose.model("user" , userSchema)






const user1 = {logedIn : true}
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
