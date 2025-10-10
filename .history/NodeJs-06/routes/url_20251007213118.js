const {urlShortner} = require("../controllers/url")
const url = require("./url")
const express = require('express')
const router = express.Router()


router.post("/" , urlShortner)


module.exports = router