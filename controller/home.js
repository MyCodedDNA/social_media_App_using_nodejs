const user=require("../models/user");
module.exports=function(req,res){
    if(req.cookies.id)
    {
        user.findById(req.cookies.id,function(err,found_user){
            if(found_user)
            {
                res.render('home');
            }
            else
            {
                res.redirect('back');
            }

        });

    }
    else
    {
        res.redirect('back');
    }

}