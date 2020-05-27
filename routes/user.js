const express=require("express");
const router=express.Router();
const controller_user=require("../controller/user");
const user=require("../models/user");
const passport=require("passport");
const local=require("passport-local");

router.get("/login",controller_user.login);
router.post("/action_login",passport.authenticate(
'local', { 
failureRedirect: '/user/login'}),controller_user.action_login);
router.get("/signup",controller_user.signup);
router.get("/action_signout",controller_user.action_signout);
router.post("/action_signup",controller_user.action_signup);
router.post("/action_comment",controller_user.action_comment);
router.post("/action_post",controller_user.action_post);
router.get("/action_delete_comment/:id",controller_user.action_delete_comment);
router.get("/action_delete_post/:id",controller_user.action_delete_post);


module.exports=router;
