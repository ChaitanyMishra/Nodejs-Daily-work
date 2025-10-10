import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId : {
    type : monggose.Schema.Types.ObjectId,
    ref : "Product",
    equired : true,
    },
    productQuantity : {
        type : Number ,
        
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

    }

},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)