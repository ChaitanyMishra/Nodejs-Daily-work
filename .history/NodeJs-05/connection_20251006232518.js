const mongoose = require('mongoose');

const 

mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () =>console.log( "MongoDB COnnected!"))
.catch(err => console.log("SOmthing Went Wrong" , err))


module.exports = mongoose