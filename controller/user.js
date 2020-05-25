const user=require("../models/user");
module.exports.login=function(req,res){
    res.render('login');

}
module.exports.action_login=function(req,res){
user.findOne({email:req.body.email,password:req.body.password},function(err,found_user){
    if(err)
    {
        console.log("user not found /error");
        return ;

    }
    if(found_user)
    {res.cookie("id",found_user._id);
    res.redirect("/");}
    res.render("login");
});
}
module.exports.signup=function(req,res){
    res.render('signup');

}

module.exports.action_signup=function(req,res){
    user.create(req.body);
    res.render('login');

}