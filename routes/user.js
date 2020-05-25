const express=require("express");
const router=express.Router();
const controller_user=require("../controller/user");

router.get("/login",controller_user.login);
router.get("/signup",controller_user.signup);


module.exports=router;
