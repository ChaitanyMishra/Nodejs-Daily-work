const express = require("express")
const app = express();
const dotenv = require("dotenv")
const router = require("./routes/url")
const connectDb = re

dotenv.config()
const port = process.env.PORT


app.get("/" ,(req,res)=>{res.status(200).send("<h1>Wellcome To my Url Shortner!</h1>")}) 

app.use("/url" , router)

app.listen(port , (err) => console.log(`Server running at ${port}`))