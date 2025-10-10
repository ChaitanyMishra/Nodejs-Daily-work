const {urlShortner} = require("../controllers/url")
const express = require('express')
const router = express.Router()


router.post("/" , urlShortner)

router.get("/analytics/:shortId"  )
module.exports = router