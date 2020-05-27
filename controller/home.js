const user=require("../models/user");
const posts=require("../models/posts");
const comments=require("../models/comments");
module.exports=function(req,res){
    if(req.isAuthenticated())
    {
        posts.find({}).populate({path:'user_data'}).populate({
            path:'comments',
            populate:{path:'user_data'}
        }).exec(function(err,found){
            
            if(err)
            {
                console.log("error in finding posts");
            }
            

            if(!found)
            {
                return res.render('login');
            }
            res.locals.posts=found;
            return res.render('home');
        });
        
    }
    
   
}