import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({

    name

},{timestamps : true}
)

const Product = mongoose.model("Product" ,productSchema )