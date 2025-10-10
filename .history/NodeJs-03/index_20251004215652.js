const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}));
const port = 4000
app.get("/"(req)=>)
app.listen(port , (req,res)=>res.send(`Server starte at ${port}`))