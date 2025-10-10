import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({

    name:{
        type : String
        requi
    }

},{timestamps : true}
)

const Product = mongoose.model("Product" ,productSchema )