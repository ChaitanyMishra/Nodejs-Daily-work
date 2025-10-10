const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 8001;



mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () =>console.log( "MongoDB COnnected!"))
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


app.get("/" , (req , res)=>{
    return res.send(`<h1>Homepage</h1>`)
})

app.post("/api/users" , async(res,res) =>{
    const body = req.body
    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle

    ){
        return res.status(400).json({Error : "All Feileds Required to fill details!"})
    }
    await
})

app.listen(port , (req) => {console.log(`Server running at Port: ${port}`)})