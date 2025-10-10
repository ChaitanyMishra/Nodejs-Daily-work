const user = require("../models/user")

async function listUsers(req, res) {
  try {
    const dbUsers = await user.find({})
    const userLi = `<ul>${dbUsers.map((u) => `<li>${u.firstName} ${u.lastName} - ${u.email}</li>`).join("")}</ul>`
    res.send(userLi)
  } catch (err) {
    console.error("Error fetching users:", err)
    res.status(500).send("Internal Server Error")
  }
}

async function createUser(req, res) {
  const body = req.body
  if (!body || !body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
    return res.status(400).json({ error: "All fields are required" })
  }

  try {
    const newUser = await user.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    })
    console.log("New user created:", newUser)
    res.status(201).json({ message: "new user added", data: newUser })
  } catch (err) {
    console.error("Error creating user:", err)
    res.status(500).send("Internal server error!")
  }
}

module.exports = { listUsers, createUser }
