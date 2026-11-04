const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Menangani error pada request
  try {
    if (req.method !== "GET") {
      res.writeHead(405, {
        "Content-Type": "text/plain",
      });

      return res.end("Method tidak diizinkan");
    }

    if (req.url !== "/") {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });

      return res.end("Halaman tidak ditemukan");
    }

    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (error, data) => {
      if (error) {
        console.error("Gagal membaca file:", error.message);

        if (!res.headersSent) {
          res.writeHead(500, {
            "Content-Type": "text/plain",
          });
        }

        return res.end("Terjadi kesalahan pada server");
      }

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(data);
    });
  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);

    if (!res.headersSent) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
    }

    res.end("Internal Server Error");
  }
});

// Menangani error pada server
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error("Port 8000 sedang digunakan!");
  } else {
    console.error("Server mengalami error:", error.message);
  }
});

server.listen(8000, () => {
  console.log("Server berjalan di http://localhost:8000");
});