const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/user')
const userRouter = require('./routes/user')
const port = 3001;
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () =>console.log( "MongoDB COnnected!"))
.catch(err => console.log("SOmthing Went Wrong" , err))


// Step - 02 Create model Based on Schema - use mongoose.model and pass your model name hear it is user and pass the userSchema now
// You can access userSchema using user
const user = mongoose.model("user" , userSchema)

app.use("/")

app.listen(port , (req) => {console.log(`Server running at Port: ${port}`)})