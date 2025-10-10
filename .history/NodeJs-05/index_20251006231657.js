const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/')
const port = 3001;
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/mongodb-test' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () =>console.log( "MongoDB COnnected!"))
.catch(err => console.log("SOmthing Went Wrong" , err))


// Step - 02 Create model Based on Schema - use mongoose.model and pass your model name hear it is user and pass the userSchema now
// You can access userSchema using user
const user = mongoose.model("user" , userSchema)


app.get("/" , (req , res)=>{
    return res.send(`<h1>Homepage</h1>`)
})
app.get("/users" , async (req,res) => {
    const dbUsers = await user.find({})
    const userLi = `<ul>
    ${dbUsers.map((user) => `<li>${user.firstName} ${user.lastName}\n${user.email}\n\n</li>`).join("")}
    </ul>`
    res.send(userLi)
})
app.post("/api/users" , async(req,res) =>{
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

app.listen(port , (req) => {console.log(`Server running at Port: ${port}`)})