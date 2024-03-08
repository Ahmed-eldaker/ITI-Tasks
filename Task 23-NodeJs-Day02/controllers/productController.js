// const products = require("../data/products");
//   console.log(products);
const fs = require("fs");
const path = require("path");
const dataFilePath = path.join(__dirname, "../data", "products.json");
const dataFile = fs.readFileSync(dataFilePath, "utf-8");
let products = JSON.parse(dataFile);

function getProducts(req, res) {
  res.json(products);
}
function getOneProduct(req, res) {
  const id = req.params.productID;
  const product = products.find((prod) => prod.id == id);
  if (!product) {
    res.send("ERROR 404 NOT FOUND");
  }
  res.json(product);
}
function createProduct(req, res) {
  let newProduct = {
    id: products.length + 1,
    productName: req.body.name,
    productPrice: req.body.price,
    featured: true,
    company: req.body.company,
  };
  if (newProduct) {
    products.push(newProduct);
    res.send("ok");
    console.log("Successfully Updated");
  } else {
    res.send("can not added");
  }
}
function updateProduct(req, res) {
  const id = req.params.productID;
  const index = products.findIndex((prod) => prod.id == id);
  let updatedProduct = {
    id: products[index].id,
    productName: req.body.name,
    featured: true,
    productPrice: req.body.price,
    company: req.body.company,
  };
  if (products[index]) {
    products[index] = updatedProduct;
  }
  {
    res.send("UPDATED");
  }
}
function deleteProduct(req, res) {
  const id = req.params.productID;
  const index = products.findIndex((prod) => prod.id == id);
  products.splice(index, 1);
  res.send("DELETED");
}

module.exports = {
  getProducts,
  getOneProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};
