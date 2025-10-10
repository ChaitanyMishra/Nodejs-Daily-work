import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true,
        lowercase : true
    },
    discription : {
        type : String,
        required : true,
    },
    price : {
        
    }

},{timestamps : true}
)

const Product = mongoose.model("Product" ,productSchema )