const mongoose = require('mongoose');

const mongooesConnect = async(url) =>{
    return mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
}


module.exports = {mongooesConnect , }