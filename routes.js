const fs = require("fs");

const requestHandler = (req, res) => {
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
}

module.exports = requestHandler;

// different type of export
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some text for multiple export'
// };
// or
// module.exports.handler = requestHandler
// module.exports.someText = 'Some text for multiple export'
// or
// exports.handler = requestHandler // <- nice to have
