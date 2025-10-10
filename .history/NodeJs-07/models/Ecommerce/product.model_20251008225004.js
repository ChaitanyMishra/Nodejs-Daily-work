import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({

},{timestamps : true}
)

const product = mongoose.model("Product" ,productSchema )