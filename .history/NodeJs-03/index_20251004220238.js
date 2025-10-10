const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.set(' view engine ' , 'e')

const port = 4000
app.get("/" , (req,res)=>{res.send("Wellcome TO node learning Day - 03")} )
app.listen(port , (req,res)=>console.log(`Server starte at ${port}`))