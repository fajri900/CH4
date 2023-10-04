const router = require("express").Router();

const Product = require("../controller/productController");

router.post("/", Product.createProduct);
router.get("/", Product.findProducts);
router.get("/:id", Product.findProductsById);
router.patch("/:id", Product.updateProductsById);
router.delete("/:id", Product.deleteProductsById);

module.exports = router;
