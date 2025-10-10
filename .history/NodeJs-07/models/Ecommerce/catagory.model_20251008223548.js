const mongoose = require ('mongoose')

const categorySchema = mongoose.Schema({
    

}, {timesptamp:true})

const Category =  mongoose.model("Category" ,categorySchema )