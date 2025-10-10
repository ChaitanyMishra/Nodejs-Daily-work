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
        type : Number,
        required : true
    },
    productImage : {
        type : String,
    },
    stock : {
         type : Number,
         defaule : 0,
    },
    Category : {
       type: mongoose.Schema.Types.ObjectId,
       ref : "Category"
       r
    }

},{timestamps : true}
)

const Product = mongoose.model("Product" ,productSchema )