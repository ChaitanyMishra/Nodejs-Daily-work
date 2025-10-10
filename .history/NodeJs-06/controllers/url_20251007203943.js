const {nanoid}= require('nanoid')
const url = require("../models/url")
const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    const body = req.body
    if(!body.url) return res.status(400).jsone({msg : "Url Required"})
    url.create({
        shortId : shortId,
        redirectUrl : 
    })


}