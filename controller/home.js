module.exports=function(req,res){
    if(req.isAuthenticated())
    {
        return res.render("home");
    }
res.redirect('/user/login');
}