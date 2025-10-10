const express = require('express')
const app = express()
const port = 8000

// app.use(express.urlencoded({extended : false}))

// app.use((req , res , next)=>{

//     console.log("hello from middleware:")

// })
app.get("/" , (req , res)=>] res.send("Hello"))


app.listen(port , (req,data) => console.log("Server Running At: " , port))
