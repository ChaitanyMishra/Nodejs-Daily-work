const {nanoid}= require('nanoid')

const URL = require("../models/url"); // Node automatically finds url.js

const urlShortner = async(req , res)=>{
    const shortId = nanoid(8);
    const body = req.body
    if(!body.url) return res.status(400).json({error : "Url Required"})
    await URL.create({
        shortId : shortId,
        redirectUrl : body.url,
        visitHistory : []
    });
    return res.status(201).json({id : shortId})
}
const userAnalytics = async(req,res) =>{
    const shortID = req.params.shortId
}
module.exports = {
    urlShortner

}