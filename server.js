const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files (e.g., index.html)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint untuk mengambil data JSON dari file 'data.json'
app.get("/api/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading data file");
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

// Endpoint untuk melayani halaman utama (root path) dengan mengirimkan file 'index.html' dari folder 'public'.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
