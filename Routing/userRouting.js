var express = require('express');
var router = express.Router();
let {registerUser}=require("../Controller/userController")
router.post("/register",registerUser)

module.exports=router