const monggose = require('mongoose')
const sellerSchema = mongoose.Schema({

    name :{
        type : String ,
        
    }

},{timestamp:true})

const Seller = mongoose.model("Seller" , sellerSchema)