const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true);

  if (pathName === "/") {
    res.end("this is ROOT");
  } else if (pathName === "/product") {
    res.end("this is PRODUCT");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/data.json`, "utf-8", (err, data) => {
      //   const fileData = JSON.parse(data);
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>PAGE NOT FOUND</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listen on port 8000");
});
