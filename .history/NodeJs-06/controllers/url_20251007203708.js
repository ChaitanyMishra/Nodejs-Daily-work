const {nanoid}= require('nanoid')
const url = require("../models/url")
const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    url.shortId = shortId;
    url.redirectUrl = req.p


}