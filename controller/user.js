const user=require("../models/user");
const comments=require("../models/comments");
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

module.exports.action_comment=function(req,res){
    req.body.user_data=req.user._id;
    comments.create(req.body);
    res.redirect('back');
    // console.log(req.body);
    
    

}