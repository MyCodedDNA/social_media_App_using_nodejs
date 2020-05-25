const express=require("express");
const router=express.Router();
const controller_user=require("../controller/user");

router.get("/login",controller_user.login);
router.post("/action_login",controller_user.action_login);
router.get("/signup",controller_user.signup);
router.post("/action_signup",controller_user.action_signup);


module.exports=router;
