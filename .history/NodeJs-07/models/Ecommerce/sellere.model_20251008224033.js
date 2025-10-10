const monggose = require('mongoose')
const sellerSchema = mongoose.Schema({

    name :{
        type : String ,
        required:true,
        unique : true,
        lowercase : true
    },
    

},{timestamp:true})

const Seller = mongoose.model("Seller" , sellerSchema)