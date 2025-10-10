const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log("Server is running!");
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/favicon.ico") return res.end();

    // Log user visit
    fs.appendFile("log.txt", `--> User Log In At ${new Date().toLocaleString()} to ${req.url}\n`, (err) => {
        if (err) console.error(err);
    });

    const myUrl = url.parse(req.url, true);
    const pathname = myUrl.pathname;
    const query = myUrl.query;

    // Routing
    switch (pathname) {
        case "/":
            return res.end("Home Page!");
        case "/about":
            if (query.name) {
                return res.end(`Hi ${query.name}, I am from Kanpur`);
            } else {
                return res.end("I am from Kanpur");
            }
        case "/education":
            return res.end("BCA From MPCPS");
        case "/projects":
            return res.end("SnapFetch - Image Search Engine!\nPersonal Portfolio Using React");
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("404 Error! Page Not Found");
    }
});

// Example for JSON read with query parameters
// e.g., http://localhost:3000/user?name
server.on('request', (req, res) => {
    const myUrl = url.parse(req.url, true);
    const query = myUrl.query;

    if (query.name || query.email) {
        fs.readFile("server.json", "utf-8", (err, data) => {
            if (err) return res.end("Error reading file");
            const jsonData = JSON.parse(data);
            if (query.name) return res.end(`Hi there! My Name Is ${jsonData.name}`);
            if (query.email) return res.end(`Hi there! My Email Id Is ${jsonData.email}`);
        });
    }
});

server.listen(3000, () => {
    console.log("Server Started on http://localhost:3000");
});
