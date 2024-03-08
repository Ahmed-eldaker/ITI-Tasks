"use client";

import { products } from "../../../../Data/ProductsData";

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.query.product);
    const product = products.filter((p) => p.id == req.query.product);
    return res.status(200).json(product);
  }

  if (req.method === "DELETE") {
    const id = req.query.product;
    const deletedProduct = products.find((p) => {
      return p.id == id;
    });
    const index = products.indexOf(deletedProduct);
    products.splice(index, 1);
    res.status(200).json(deletedProduct);
  }

  if (req.method === "PATCH") {
    const id = req.query.product;
    const product = req.body.product;
    const deletedProduct = products.find((p) => {
      return p.id == id;
    });
    const index = products.indexOf(deletedProduct);
    products.splice(index, 1);
    products.push(product);
    res.status(200).json({ message: "Update Successfully" });
  }
}
