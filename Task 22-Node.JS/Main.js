// ---1.1---//
// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const htmlFilePath = path.join(__dirname, "Index.html");
// // const cssFilePath = path.join(__dirname, "Style.css");
// const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
// // const cssFile = fs.readFileSync(cssFilePath, "utf-8");
// const htmlWrite = fs.writeFileSync(htmlFilePath, "ya ahmed", { flag: "a" });
// const htmlRead = fs.readFileSync(htmlFilePath, "utf-8");

// ---1.2---//
// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const htmlFilePath = path.join(__dirname, "Index.html");
// const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
// const dataFilePath = path.join(__dirname, "data", "products.json");
// const dataFile = fs.readFileSync(dataFilePath, "utf-8");
// let products = JSON.parse(dataFile);
// for (let i = 0; i < products.length; i++) {
//   products[i].featured = true;
// }
// // console.log(products);
// let Max = Math.max(
//   ...products.map((el) => {
//     return el.productPrice;
//   })
// );
// var m = 0;
// for (let i = 0; i < products.length; i++) {
//   m = Math.max(m, products[i].productPrice);
// }
// let newCompany = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].company === "marcos") {
//     // console.log(products[i]);
//     newCompany.push(products[i]);
//   }
// }

// console.log(newCompany);
// // console.log(...products);
// console.log(Max);
// // console.log(m);

// //--2--//
// const http = require("http");
// const path = require("path");
// const fs = require("fs");
// const htmlFilePath = path.join(__dirname, "Index.html");
// const htmlFile = fs.readFileSync(htmlFilePath, "utf-8");
// const cssFilePath = path.join(__dirname, "Style.css");
// const cssFile = fs.readFileSync(cssFilePath, "utf-8");
// const imgPath = path.join(__dirname, "Img.jpeg");
// const imgFile = fs.readFileSync(imgPath);
// const videoPath = path.join(__dirname, "Video.html");
// const videoFile = fs.readFileSync(videoPath, "utf-8");
// const video = path.join(__dirname, "Video.mp4");
// const videoMM = fs.readFileSync(video);
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.end(htmlFile);
//     return;
//   }
//   if (url === "/img") {
//     res.end(imgFile);
//     return;
//   }
//   if (url === "/video") {
//     res.end(videoFile);
//     return;
//   }
//   if (url === "/Video.mp4") {
//     res.end(videoMM);
//     return;
//   }
// server.listen(8000, () => {
//   console.log("video is running");
// });
