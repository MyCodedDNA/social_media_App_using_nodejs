const user=require("../models/user");
const comments=require("../models/comments");
const posts=require("../models/posts");
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
module.exports.action_post=function(req,res){
    if(req.isAuthenticated())
    {
        req.body.user_data=req.user._id;
        posts.create(req.body,function(err,found){
            if(err)
            {
                console.log("err in creating posts");
            }
        });
        return res.redirect('/');
    }
    return res.redirect('/user/login');
}

module.exports.action_comment=function(req,res){
    if(req.isAuthenticated())
    {
        req.body.user_data=req.user._id;
        posts.findById(req.body.post_data,function(err,found_posts){
            if(err)
            {
                return console.log("error in finding posts in action_comment");
            }
            
            comments.create(req.body,function(err,found_comments){
                if(err)
                {
                    console.log("err in creating posts",err);
                }
                found_posts.comments.push(found_comments);
                found_posts.save();
            });
            
            return res.redirect('/');
        

        });
    }
    
}

