const mongoose = require('mongoose');

const mongooesConnect = async() =>{
    return mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
}


module.exports = mongooesConnect