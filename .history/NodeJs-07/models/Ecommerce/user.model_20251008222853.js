const mongoose = require('mongoose')
const user = mongoose.Schema({

    user

}, {timestamps : true})

const User = mongoose.model('User' , user)