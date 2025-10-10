const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/user')
const userRouter = require('./routes/user')
const {mongooesConnect} = require('./connection')
const port = 3001;
app.use(express.json())


mongooesConnect('mongodb://127.0.0.1:27017/mongodb-test')


// root route to avoid "Cannot GET /" when visiting the site root
app.get('/', (req, res) => {
	res.send('<h1>Welcome to NodeJs-05 API</h1><p>Use <a href="/user">/user</a> to access users</p>')
})

app.use("/user" , userRouter)

app.listen(port , (req) => {console.log(`Server running at Port: ${port}`)})