const {nanoid}= require('nanoid')
const url = require("../models/url")
const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    const body = req.body
    if(body.p)
    url.create({
        shortId : shortId,
        redirectUrl : 
    })


}