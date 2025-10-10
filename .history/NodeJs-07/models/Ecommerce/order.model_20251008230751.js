import mongoose from 'mongoose'
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
    

},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)