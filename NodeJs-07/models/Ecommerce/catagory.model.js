const mongoose = require ('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        tyepe:String,
        required : true
    }

}, {timesptamp:true})

export const Category =  mongoose.model("Category" ,categorySchema )