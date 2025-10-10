const express = require('express')
const router = express.Router() 
const { listUsers, createUser } = require("../controllers/userController")



// router.get("/" , (req , res)=>{
//     return res.send(`<h1>Homepage</h1>`)
// })
router.get("/" , listUsers)
router.post("/" , createUser)
 
module.exports = router;