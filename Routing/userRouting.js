var express = require('express');
var router = express.Router();
let {registerUser,Login}=require("../Controller/userController")
router.post("/register",registerUser)
router.post("/login",Login)


module.exports=router