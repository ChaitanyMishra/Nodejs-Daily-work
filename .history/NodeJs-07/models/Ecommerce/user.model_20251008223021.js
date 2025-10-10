const mongoose = require('mongoose')
const userSchema = mongoose.Schema({

    username : {
        type : String,
        required : true ,
        unique : true
    },
    email : {
        type : String,
        unique : true
    }

}, {timestamps : true})

const User = mongoose.model('User' , userSchema)