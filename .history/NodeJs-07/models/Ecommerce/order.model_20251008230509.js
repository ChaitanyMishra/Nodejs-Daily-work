import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    type: {
        
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)