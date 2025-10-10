const mongoose = require('mongoose')
const user = mongoose.Schema({

    username : {
        type : String,
        required : 
    }

}, {timestamps : true})

const User = mongoose.model('User' , user)