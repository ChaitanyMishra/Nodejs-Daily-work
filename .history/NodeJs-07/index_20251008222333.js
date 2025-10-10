const express = require('express')
const app = express()

app.get("/" , (req,res))

app.listen(5001 , (err) => {
    console.log("Server Runngin!")
})