const express = require('express')
const app = express()
const port = 8000
const router = express.Router();
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
      useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( () =>console.log( "MongoDB COnnected!"))
.catch(err => console.log("SOmthing Went Wrong" , err))

// Step - 01 Create Schema of your db - Schema = Structure of Your Db like name , email , gender
const userSchema = new mongoose.Schema({
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








app.listen(port , (req,data) => console.log("Server Running "))
