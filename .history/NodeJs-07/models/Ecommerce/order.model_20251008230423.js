import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({

},{timeseries:true})

export const Order = mongoose.model("Order" , orderSchema)