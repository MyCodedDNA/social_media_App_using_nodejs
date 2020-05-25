const express=require("express");
const router=express.Router();
const controller_user=require("../controller/user");
const user=require("../models/user");
const passport=require("passport");
const local=require("passport-local");

router.get("/login",controller_user.login);
router.post("/action_login",passport.authenticate(
'local', { 
failureRedirect: '/user/login',
failureFlash: true }),controller_user.action_login);
router.get("/signup",controller_user.signup);
router.post("/action_signup",controller_user.action_signup);


module.exports=router;
