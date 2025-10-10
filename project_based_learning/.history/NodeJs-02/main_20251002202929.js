const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    // Parse the URL and query
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Log user visit
    fs.appendFile("log.txt", `--> User Log In At ${new Date().toLocaleString()} to ${req.url}\n`, err => {
        if (err) console.error(err);
    });

    // Handle routes
    if (pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Home Page!");
    } else if (pathname === "/about" || pathname === "/projects") {
        // Read JSON file
        fs.readFile("server.json", "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error reading JSON file");
            }

            const jsonData = JSON.parse(data);

            res.writeHead(200, { "Content-Type": "text/plain" });

            // Check query params
            if (pathname === "/about") {
                if ("name" in query) return res.end(`Name: ${jsonData.about.name}`);
                if ("course) return res.end(`Course: ${jsonData.about.course}`);
                if (query.email) return res.end(`Email: ${jsonData.about.email}`);
                if (query.cgpa) return res.end(`Cgpa: ${jsonData.about.cgpa}`);
                if (query.sem) return res.end(`My Current Semester: ${jsonData.about.semester}`);
                if (query.city) return res.end(`I am from: ${jsonData.about.city}`);
                // No query → return full about
                return res.end(JSON.stringify(jsonData.about, null, 2));
            }

            if (pathname === "/projects") {
                if (query.id && jsonData.projects[query.id]) {
                    return res.end(`Project ${query.id}: ${jsonData.projects[query.id]}`);
                }
                // No query → return all projects
                return res.end(JSON.stringify(jsonData.projects, null, 2));
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("404 Error! Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server Started on http://localhost:3000");
});
