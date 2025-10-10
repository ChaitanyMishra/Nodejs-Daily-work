const express = require('express')
const app = express()
const port = 8000

app.use((req , res , next) => {
    console.log("Middleware Running!")
    req.name = "Chaiatany Mishra From Kanpur!"

    
    next();
})

app.use((req , res , next) => {
    ressend(`This IS middleware 2 and it can access ${req.name}`)
   
})
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
