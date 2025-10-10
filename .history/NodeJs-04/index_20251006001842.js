const express = require('express')
const app = express()
const port = 8000

const isLoggedin = (req , res , next) => {
    const
    if(user)
}
app.get("/" , (req , res) =>{
    res.send("Wellcome")
   
})

app.get("/user" , (req , res)=>{
    res.send("Chaitany Mishra")
})

app.listen(port , (req,data) => console.log("Server Running "))
