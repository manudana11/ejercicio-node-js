// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('pages/home.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "./pages/" + q.pathname;
    console.log(q);
      fs.readFile(filename, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          console.error(err);
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
  })
  .listen(8080);

  