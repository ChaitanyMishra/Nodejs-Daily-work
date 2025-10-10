import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    orderName : {

    },
    orderPrice : {
        type  : Number,
        requ
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)