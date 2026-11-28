var express = require("express");
var router = express.Router();
var {
  postProduct,
  getProduct,
  getProductById,
  getProductByIdAndUpdate,
  getProductByIdAndDelete,
} = require("../Controller/productController");

router.post("/", postProduct);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/:id", getProductByIdAndUpdate);
router.delete("/:id", getProductByIdAndDelete);
module.exports = router;
