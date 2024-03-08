// const http = require("http");
// const path = require("path");
// const fs = require("fs");
const express = require("express");
const productRouter = require("./Routes/productRouter.js");
var app = express();
app.use(express.json());
app.use("/products", productRouter);

// const dataFilePath = path.join(__dirname, "data", "products.json");
// const dataFile = fs.readFileSync(dataFilePath, "utf-8");
// // let products = JSON.parse(dataFile);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
app.listen("5050", () => {
  console.log("running in port 5050");
});
