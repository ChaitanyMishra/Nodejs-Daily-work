const http = require('http')
const fs = require('fs')
const server =  http.createServer((err , res) =>{
    if(err){
        console.log("Error! " + err)
    }else{
        console.log("Server is running!")
        console.log(req);
        res._write
        console.log(server);
    }

})