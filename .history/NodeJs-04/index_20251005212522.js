const express = require('express')
const app = express()
const port = 4001

app.use(express.urlencoded({e}))



app.listen(port , (req,data) => console.log("Server Running At: " , port))
