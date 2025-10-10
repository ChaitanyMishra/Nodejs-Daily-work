const http = require('http')
const fs = require('fs')
const url = require("url")
const server = http.createServer((req, res) => {
    console.log("Server is running!")
    res.writeHead(200, { "Content-Type": "text/plain" })
    // res.end("Server running SuccessFully")
    //  console.log(server);
    if (req.url === "/favicon.ico") return res.end()
    fs.appendFile("log.txt", `--> User Log In At ${new Date().toLocaleString()} to ${req.url}\n`, (err, data) => {
        const myUrl = url.parse(req.url, true)
        console.log(myUrl)
        switch (myUrl.pathname) {
        case "/":
            res.end("HomePAge!")
            break
        case "/about":
            const userName = myUrl.query.name;
            res.end(`Hi ${userName}, I am From Kanpur`)
            break;
        case "/education":
            res.end("BCA From MPCPS")
            break;
        case "/projects":
            res.end("SnapFetch - Image Search Engine! \nPersonal Portfolio Using React")
        default:
            res.weiteHead(404, { "content-type": "text/plain" })
            res.end("404 Error! Page Not Found")

    }
    switch(myUrl. search){
        case "name":
            fs.readFile("server.json" , "utf-8" , (err , data) =>{
                if(err){
                    throw new Error("Error! " + err);
                }else{
                    res.end(`Hi ${req.url.}`)
                }
            })
    }
    })
    
})
server.listen(3000, () => {
    console.log("Server Started!")
});