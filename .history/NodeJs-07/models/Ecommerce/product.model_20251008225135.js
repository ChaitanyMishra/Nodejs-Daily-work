import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({

    name:{
        type : String
        required :
    }

},{timestamps : true}
)

const Product = mongoose.model("Product" ,productSchema )