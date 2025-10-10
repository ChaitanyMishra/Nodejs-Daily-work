const express = require('express')
const app = express()
const port = 4001

// app.use(express.urlencoded({extended : false}))

app.use((req , res , next)=>{

    
})



app.listen(port , (req,data) => console.log("Server Running At: " , port))
