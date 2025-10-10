const express = require("express")
const app = express();
const dotenv = require("dotenv")
const router = require("./routes/url")
const {connectDb} = require("./connect")
const {urlShortner} = require("./controllers/url")
const URL = require("./models/url")
app.use(express.json())
connectDb("mongodb://localhost:27017/user-shortner")
.then(()=>console.log("Database Connected"))
.catch((err)=>{console.log(err)})
dotenv.config()
const port = process.env.PORT




app.use("/url" , router)
app.get("/url/:shortId" , async(req , res) => {
    const shortID = req.params.shortId
   const entry =  await URL.findOneAndUpdate({
        shortId : shortID
    },
    {
        $push : {
            visitHistory : {
               timeStamp : Date.now()
            }
        }
    },
    {new : true}
    );
    res.redirect(entry.redirectUrl)
})

router.get("/analytics" , req)

app.listen(port , (err) => console.log(`Server running at ${port}`))