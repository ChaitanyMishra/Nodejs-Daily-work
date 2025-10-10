import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    orderName : {

    },
    orderPrice : {
        t
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)