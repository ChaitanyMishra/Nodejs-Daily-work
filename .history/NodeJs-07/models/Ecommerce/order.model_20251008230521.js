import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
    name : {
        
    }
},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)