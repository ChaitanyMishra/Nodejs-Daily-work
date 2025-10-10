const mongoose = require('mongoose')
const URL = mongoose.model("URL", urlSchema);
const urlSchema = new mongoose.Schema({

    shortId : {
        type : String,
        required : true ,
        unique : true
    },
    redirectUrl : {
        type : String,
        required : true ,
        visitHistory : [{timestamp : {type : Number}}]
    },
},{timestamps : true}) 

module.exports = URL;