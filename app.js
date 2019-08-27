// Core modules -
// http, https, fs, path, os 
const http = require('http');

// function requestListener(req, res) {
// can call this inside createServer()
// }

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    // process.exit(); // node event cycle and event loop
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head>Node testing! Sending response</head></html>')
    res.end();
})

server.listen(2000);
