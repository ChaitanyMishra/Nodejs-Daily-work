const exp = require("express");
const http = require("http");
const app = exp();
const users = require("")

app.get("/", (req , res)=> res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
</head>
<body style="margin:0; font-family: Arial, sans-serif;">

    <!-- Header Section -->
    <header style="background-color: #4CAF50; color: white; text-align: center; padding: 50px 20px;">
        <h1 style="margin: 0;">Welcome to My Landing Page</h1>
        <p style="font-size: 18px;">Your journey starts here!</p>
        <a href="#signup" style="display: inline-block; background-color: white; color: #4CAF50; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Get Started</a>
    </header>

    <!-- Features Section -->
    <section style="padding: 50px 20px; text-align: center;">
        <h2 style="color: #333;">Features</h2>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 30px;">
            <div style="flex: 1 1 250px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                <h3 style="color: #4CAF50;">Fast</h3>
                <p>Our platform is lightning fast and optimized for performance.</p>
            </div>
            <div style="flex: 1 1 250px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                <h3 style="color: #4CAF50;">Secure</h3>
                <p>Your data is safe with top-notch security protocols.</p>
            </div>
            <div style="flex: 1 1 250px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                <h3 style="color: #4CAF50;">Reliable</h3>
                <p>99.9% uptime guarantee. You can count on us anytime.</p>
            </div>
        </div>
    </section>

    <!-- Signup Section -->
    <section id="signup" style="background-color: #f9f9f9; padding: 50px 20px; text-align: center;">
        <h2 style="color: #333;">Join Us Today</h2>
        <p style="margin-bottom: 20px;">Sign up to get early access and updates.</p>
        <form style="display: inline-block; text-align: left; max-width: 400px; width: 100%;">
            <input type="text" placeholder="Name" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #ccc;">
            <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #ccc;">
            <button type="submit" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">Sign Up</button>
        </form>
    </section>

    <!-- Footer Section -->
    <footer style="background-color: #333; color: white; text-align: center; padding: 20px;">
        &copy; 2025 My Landing Page. All rights reserved.
    </footer>

</body>
</html>
`))
app.get("/about" , (req , res) => res.send("This Is About Page!" + req.query.name))
app.get("/education" , (req , res)=> res.send("This Is Education Page"))

app.listen(4000 , ()=> console.log("Server Running At 4000 Port"))
