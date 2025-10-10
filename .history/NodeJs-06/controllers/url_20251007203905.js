const {nanoid}= require('nanoid')
const url = require("../models/url")
const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    const body = req.body
    if(!body.url) return res
    url.create({
        shortId : shortId,
        redirectUrl : 
    })


}