import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    orderame : {

    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)