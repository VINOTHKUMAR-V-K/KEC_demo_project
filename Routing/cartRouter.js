var express = require("express");
var router = express.Router();
var {
  getCart,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = require("../Controller/cartController");

router.post("/", getCart);
router.post("/add", addToCart);
router.put("/increase/:id", increaseQty);
router.put("/decrease/:id", decreaseQty);
router.delete("/remove/:id", removeFromCart);

module.exports = router;
