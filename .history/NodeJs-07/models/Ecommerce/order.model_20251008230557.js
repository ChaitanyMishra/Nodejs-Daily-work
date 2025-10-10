import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    orderName : {

    },
    
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)