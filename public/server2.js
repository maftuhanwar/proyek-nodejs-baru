const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(500, {
          "Content-Type": "text/plain",
        });

        return res.end("Terjadi kesalahan pada server");
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });

    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain",
  });

  res.end("Halaman tidak ditemukan");
});

server.listen(8000, () => {
  console.log("Server2 berjalan di http://localhost:8000");
});