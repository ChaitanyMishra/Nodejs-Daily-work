const express = require('express')
const app = express()
const port = 8000

app.use((req , res , next) => {
    console.log("Middleware Running!")
    
})
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
