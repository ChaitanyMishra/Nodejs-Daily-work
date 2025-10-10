const express = require('express')
const app = express()
const port = 8000


app.get("/" , (req , res) =>{
    res.send("Wellcome")
})

app.get("/user")

app.listen(port , (req,data) => console.log("Server Running "))
