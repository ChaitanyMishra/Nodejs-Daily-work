const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json')
const port = 3001;

app.get("/" ,(req,res) =>{
    res.send(`<h1>Wellcome TO My Website </h1>`)
})
app.get("/users", (req, res) => {
  let html = `
    <html>
      <head>
        <title>Users List</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px;">
        <div style="max-width: 800px; margin: auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="text-align: center; color: #333;">Users List</h1>
  `;

  users.forEach(user => {
    html += `
      <div style="padding: 15px; background-color: #e0e0e0; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; flex-wrap: wrap;">
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Job:</strong> ${user['job-title']}</p>
      </div>
    `;
  });

  html += `
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

app.get("/api/users" , (req,res) => {
    const userdata = users
    res.json(userdata)
    
})
app.get("/users/username/:username" , (req , res) => {
    const username = req.params.username
    const userdata = users.find((user) => user.first_name.toLowerCase() === username.toLowerCase())
    res.json(userdata)
})
app.get("/users/name/:name" , (req , res) => {
    const username = req.params.name;
    res.send(`Hello ${username}`)
})
app.listen(port , (req , res)=>console.log("Server started!"))