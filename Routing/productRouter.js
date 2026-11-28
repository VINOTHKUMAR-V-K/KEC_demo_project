var express = require('express');
var router = express.Router();
var {postProduct,getProduct}=require("../Controller/productController")
router.post("/",postProduct)
router.get("/",getProduct)

module.exports=router