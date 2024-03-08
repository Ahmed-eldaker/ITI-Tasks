// ---1.1---//
// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const htmlFilePath = path.join(__dirname, "Index.html");
// const cssFilePath = path.join(__dirname, "Style.css");
// const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
// const cssFile = fs.readFileSync(cssFilePath, "utf-8");
// const htmlWrite = fs.writeFileSync(htmlFilePath, "ya ahmed", { flag: "a" });
// const htmlRead = fs.readFileSync(htmlFilePath, "utf-8");

// ---1.2---//
const http = require("http");
const path = require("path");
const fs = require("fs");
const htmlFilePath = path.join(__dirname, "Index.html");
const dataFilePath = path.join(__dirname, "data", "products.json");
const dataFile = fs.readFileSync(dataFilePath, "utf-8");
const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
let products = JSON.parse(dataFile);
const server = http
  .createServer((req, res) => {
    const newProducts = products.map((item) => {
      return (item.featured = true);
    });

    console.log(newProducts);
  })
  .listen(3000);
