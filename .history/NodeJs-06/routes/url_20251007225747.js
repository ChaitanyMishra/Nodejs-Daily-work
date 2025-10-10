const {urlShortner} = require("../controllers/url")
const express = require('express')
const router = express.Router()


router.post("/" , urlShortner)

router.get("/analytics/:shortId" (req,res) => {res.json(userAnalytics)} )
module.exports = router