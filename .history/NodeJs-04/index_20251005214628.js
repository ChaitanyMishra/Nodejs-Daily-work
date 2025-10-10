const express = require('express')
const app = express()
const port = 8000

// app.use((req , res , next)=>{

//     console.log("hello from middleware:")

// })
app.get("/" , (req , res) =>{
    res.send("Wellcome")
})

app.listen(port , (req,data) => console.log("Server Running "))
