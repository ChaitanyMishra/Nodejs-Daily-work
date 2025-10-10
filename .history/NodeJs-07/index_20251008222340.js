const express = require('express')
const app = express()

app.get("/" , (req,res) => res.status(200))

app.listen(5001 , (err) => {
    console.log("Server Runngin!")
})