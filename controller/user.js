const user=require("../models/user");

module.exports.login=function(req,res){
    if(req.isAuthenticated())
    {
        return res.redirect("/");
    }
    res.render('login');

}
module.exports.action_login=function(req,res){

    res.redirect('/');

}
module.exports.signup=function(req,res){
    if(req.isAuthenticated())
    {
        return res.render("home");
    }
    res.render('signup');

}
module.exports.action_signup=function(req,res){
    user.create(req.body);
    res.render('login');

}

module.exports.action_signout=function(req,res){
    req.logout();
    res.render('login');

}