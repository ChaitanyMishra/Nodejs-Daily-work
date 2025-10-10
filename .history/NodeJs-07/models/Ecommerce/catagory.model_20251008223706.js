const mongoose = require ('mongoose')

const categorySchema = mongoose.Schema({
    name : {
        tyepe:Stri
    }

}, {timesptamp:true})

const Category =  mongoose.model("Category" ,categorySchema )