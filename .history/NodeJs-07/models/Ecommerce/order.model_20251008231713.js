import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId : {
    type : monggose.Schema.Types.ObjectId,
    ref : "Product",
    },
    productQuantity : {
        type : Number ,
        required : true,
        default : 0
    }
})

const orderSchema = new mongoose.Schema({
    orderName : {

    },
    orderPrice : {
        type  : Number,
        required : true,
        default : 0
    },
    orderSeller : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Seller",
        required : true,
    },
    coustmer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    orderDetails : {
        type : 
    }

},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)