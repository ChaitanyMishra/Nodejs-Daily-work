const mongoose = require('mongoose');

const mongooesConnect = async() =>{
    return mongoose.connect('' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
}


module.exports = {mongooesConnect , }