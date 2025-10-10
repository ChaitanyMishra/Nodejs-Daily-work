import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    orderName : {

    },
    orderPrice : {
        type  : Number,
        required : true,
        default : 0
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)