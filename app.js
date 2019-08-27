// Core modules -
// http, https, fs, path, os 
const http = require('http');
const fs = require('fs');
// function requestListener(req, res) {
// can call this inside createServer()
// }

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    // process.exit(); // node event cycle and event loop
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><head>Node testing! Sending response</head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Duummy text')
        //res.writeHead(302, {})
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head>Node testing! Sending response</head></html>')
    res.end();
})

server.listen(2000);
