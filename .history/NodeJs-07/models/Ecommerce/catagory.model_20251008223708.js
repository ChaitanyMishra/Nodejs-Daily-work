const mongoose = require ('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        tyepe:String,
    }

}, {timesptamp:true})

const Category =  mongoose.model("Category" ,categorySchema )