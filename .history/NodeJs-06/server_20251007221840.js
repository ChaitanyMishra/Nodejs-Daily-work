const express = require("express")
const app = express();
const dotenv = require("dotenv")
const router = require("./routes/url")
const {connectDb} = require("./connect")
const {urlShortner} = require("./controllers/url")
const {URL} = require("./models/url")
app.use(express.json())
connectDb("mongodb://localhost:27017/user-shortner")
.then(()=>console.log("Database Connected"))
.catch((err)=>{console.log(err)})
dotenv.config()
const port = process.env.PORT




app.use("/url" , router)
app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId; // matches :shortId in route

        // find and update the URL
        const entry = await URL.findOneAndUpdate(
            { shortId }, // must match schema
            { $push: { visitHistory: { timestamp: Date.now() } } }, // match schema
            { new: true } // return updated doc
        );

        if (!entry) return res.status(404).send("Short URL not found");

        // redirect to original URL
        res.redirect(entry.redirectUrl); // match schema field name
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});


app.listen(port , (err) => console.log(`Server running at ${port}`))