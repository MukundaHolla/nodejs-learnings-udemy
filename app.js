// Core modules -
// http, https, fs, path, os 
const http = require('http');

// function requestListener(req, res) {
// can call this inside createServer()
// }

const server = http.createServer((req, res) => {
    console.log(req)
})

server.listen(2000);
