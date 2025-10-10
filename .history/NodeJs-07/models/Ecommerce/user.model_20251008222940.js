const mongoose = require('mongoose')
const user = mongoose.Schema({

    username : {
        type : String,
        required : true ,
        unique : true
    },
    email : {
        type : String,
        
    }

}, {timestamps : true})

const User = mongoose.model('User' , user)