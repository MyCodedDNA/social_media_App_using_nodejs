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
    req.body.id=req.user.id;
    comments.create(req.body);
    // console.log(req.body);
    comments.find({},function(err,found){
        if(err)
        {
            return console.log("error in finding comments in db");
        }
        if(!found)
        {
            return res.redirect("back");
        }
        res.locals.comments=found;
        // console.log(found);
        res.render("home");
    });
    

}