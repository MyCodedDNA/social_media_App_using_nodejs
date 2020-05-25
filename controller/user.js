const user=require("../models/user");

module.exports.login=function(req,res){
    res.render('login');

}
module.exports.action_login=function(req,res){
    
    res.redirect('/');

}
module.exports.signup=function(req,res){
    
    res.render('signup');

}
module.exports.action_signup=function(req,res){
    user.create(req.body);
    res.render('login');

}