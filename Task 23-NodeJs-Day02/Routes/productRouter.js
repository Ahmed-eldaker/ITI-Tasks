const router = require("express").Router();
const {
  getProducts,
  getOneProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getProducts).post(createProduct);
router
  .route("/:productID")
  .get(getOneProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
module.exports = router;
   