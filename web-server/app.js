const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHeader(404);
      res.write("error: file not found");
    }
    res.write(data);
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) return console.error(err);

  console.log(" server is listening on Port 3000");
});
