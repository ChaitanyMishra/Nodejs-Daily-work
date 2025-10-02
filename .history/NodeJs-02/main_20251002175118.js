const http = require('http')
const fs = require('fs')
http.createServer((err , res) =>{
    if(err){
        console.log("Error! " + err)
    }else{
        console.log("Server is running!")
        console.log(res);
    }
})