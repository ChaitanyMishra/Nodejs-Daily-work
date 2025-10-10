const mongoose = require('mongoose')
const userSchema = mongoose.Schema({

    username : {
        type : String,
        required : true ,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        unique : true,
        lowercase : true
    }

}, {timestamps : true})

const User = mongoose.model('User' , userSchema)