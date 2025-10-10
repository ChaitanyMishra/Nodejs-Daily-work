const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/user')
const userRouter = require('./routes/user')
const {mongooesConnect} = require('./connection')
const port = 3001;
app.use(express.json())


mongooesConnect('mongodb://127.0.0.1:27017/mongodb-test')


app.use("/user" , userRouter)

app.listen(port , (req) => {console.log(`Server running at Port: ${port}`)})