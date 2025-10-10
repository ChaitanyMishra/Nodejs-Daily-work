const express = require('express')
const router = express.Router() 
const user = require("../models/user")



// router.get("/" , (req , res)=>{
//     return res.send(`<h1>Homepage</h1>`)
// })
router.get("/" , async (req,res) => {
    try{
    const dbUsers = await user.find({})
    const userLi = `<ul>
    ${dbUsers.map((u) => `<li>${u.firstName} ${u.lastName} - ${u.email}</li>`).join("")}
    </ul>`
    res.send(userLi)
    }catch(err){
        console.error("Error fetching users:", err)
        res.status(500).send("Internal Server Error")
    }
})
router.post("/" , async(req,res) =>{
    const body = req.body
    console.log("Incoming Request Body:", req.body);

    if(Cannot GET /
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle

    ){
        return res.status(400).json({error : "All fields are required"})
    }
    try{
    const newUser = await user.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        jobTitle : body.jobTitle

    });
    console.log(newUser)
    res.status(201).json({message : "new user added" ,data : newUser})
}catch{
    res.status(500).send("Internal server error!")
}
})
 
module.exports = router;