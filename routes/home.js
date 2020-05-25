const express=require("express");
const router=express.Router();
const controller_home=require("../controller/home");
const user_router=require("./user");

router.get("/",controller_home);
router.use("/user",require("./user"))



module.exports=router;