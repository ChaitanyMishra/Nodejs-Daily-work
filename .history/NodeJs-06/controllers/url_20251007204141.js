const {nanoid}= require('nanoid')
const url = require("../models/url")
const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    const body = req.body
    if(!body.url) return res.status(400).jsone({error : "Url Required"})
    await url.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : []
    })
    return res.status(201).json({id : })


}