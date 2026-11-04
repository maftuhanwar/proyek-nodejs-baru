const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });

    res.end("hello world");
  }
});

server.listen(8000, () => {
  console.log("Server berjalan di http://localhost:8000");
});