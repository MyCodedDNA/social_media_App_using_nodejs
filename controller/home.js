const user=require("../models/user");
const comments=require("../models/comments");
module.exports=function(req,res){
    if(req.isAuthenticated())
    {
        comments.find({}).populate('user_data').exec(function(err,found){
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
        return;
    }
    
res.redirect('/user/login');
}