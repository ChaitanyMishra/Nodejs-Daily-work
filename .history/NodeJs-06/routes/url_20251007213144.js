const {urlShortner} = require("../controllers/url")
const {ur} = require("./url")
const express = require('express')
const router = express.Router()


router.post("/" , urlShortner)


module.exports = router