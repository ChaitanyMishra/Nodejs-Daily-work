const express = require("express")
const app = express();
const dotenv = require("dotenv")
const router = require("./routes/url")
const path = require('path')
const {connectDb} = require("./connect")

const URL = require("./models/url")
app.use(express.json())
connectDb("mongodb://localhost:27017/user-shortner")
.then(()=>console.log("Database Connected"))
.catch((err)=>{console.log(err)})
dotenv.config()
const port = process.env.PORT || 3000




app.use("/url" , router)

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.get("/url/:shortId" , async(req , res) => {
    try {
        const shortID = req.params.shortId
        const entry = await URL.findOneAndUpdate(
            { shortId: shortID },
            { $push: { visitHistory: { timeStamp: Date.now() } } },
            { new: true }
        )

        if (!entry) {
            return res.status(404).send("Short URL not found")
        }

        return res.redirect(entry.redirectUrl)
    } catch (err) {
        console.error("Error handling short URL redirect:", err)
        return res.status(500).send("Internal Server Error")
    }
})


app.listen(port , (err) => console.log(`Server running at ${port}`))