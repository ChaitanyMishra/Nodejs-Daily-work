switch (myUrl.pathname) {
        case "/":
            res.end("HomePAge!")
            break
        case "/about":
            res.end("I am From Kanpur")
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