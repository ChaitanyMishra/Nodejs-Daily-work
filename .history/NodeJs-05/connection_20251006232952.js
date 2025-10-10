const mongoose = require('mongoose');

const mongooesConnect = async() =>{
    return mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
}


module.exports = {mongooesConnect , }