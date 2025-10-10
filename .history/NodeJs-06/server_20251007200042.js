const express = require("express.js")
const app = express();
const dotenv = require("dotenv")

dotenv.config()
const port = process.env.PORT


app.get("/" ,(req,res)) =


app.listen(port , (err) => conso.log(`Server running at ${port}`))