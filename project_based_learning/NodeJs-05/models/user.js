const mongoose = require('mongoose');


// Step - 01 Create Schema of your db - Schema = Structure of Your Db like name , email , gender
const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        required : true
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

module.exports = user