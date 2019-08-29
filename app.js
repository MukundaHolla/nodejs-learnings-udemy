// Core modules -
// http, https, fs, path, os
const http = require("http");
// function requestListener(req, res) {
// can call this inside createServer()
// } //old method
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(2000);