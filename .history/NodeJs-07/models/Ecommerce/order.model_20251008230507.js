import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    type: {
        St
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)