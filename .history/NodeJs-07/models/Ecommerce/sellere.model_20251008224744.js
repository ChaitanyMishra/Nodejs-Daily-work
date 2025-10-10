const monggose = require('mongoose')
const sellerSchema = mongoose.Schema({

    name :{
        type : String ,
        required:true,
        unique : true,
        lowercase : true
    },
     email : {
        type : String,
        required  : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    shopName:{
        type : String,
        required : true,
        unique: true,
    }

},{timestamp:true})

const Seller = mongoose.model("Seller" , sellerSchema)