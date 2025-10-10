const express = require('express')
const router = express.Router() 



router.get("/" , (req , res)=>{
    return res.send(`<h1>Homepage</h1>`)
})
router.get("/users" , async (req,res) => {
    const dbUsers = await user.find({})
    const userLi = `<ul>
    ${dbUsers.map((user) => `<li>${user.firstName} ${user.lastName}\n${user.email}\n\n</li>`).join("")}
    </ul>`
    res.send(userLi)
})
router.post("/api/users" , async(req,res) =>{
    const body = req.body
    console.log("Incoming Request Body:", req.body);

    if(
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle

    ){
        return res.status(400).json({Error : "All Feileds Required to fill details!"})
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