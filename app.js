// Core modules -
// http, https, fs, path, os
const http = require("http");
const fs = require("fs");
// function requestListener(req, res) {
// can call this inside createServer()
// }

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)
  // process.exit(); // node event cycle and event loop
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html><head>Node testing! Sending response</head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // register event listener for incoming stream of data
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    //res.writeHead(302, {})
    // this is completed before  req.end()
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head>Node testing! Sending response</head></html>");
  res.end();
});

server.listen(2000);
