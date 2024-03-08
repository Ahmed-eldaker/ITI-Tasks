// const http = require("http");
const path = require("path");
const fs = require("fs");
const express = require("express");
var app = express();

const dataFilePath = path.join(__dirname, "data", "products.json");
const dataFile = fs.readFileSync(dataFilePath, "utf-8");
let products = JSON.parse(dataFile);

app.get("/", (req, res) => {
  res.end("welcome here");
  console.log(res.json(productsPath));
});
app.listen("5000", () => {
  console.log("running in port 5000");
});
