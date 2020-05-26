const passport=require("passport");
const local=require("passport-local").Strategy;
const user=require("../models/user");

passport.use(new local(
{usernameField:"email"},
function(email,password,done)
{
    user.findOne({email:email,password:password},function(err,found_user){
    
        if(err)
        {
            console.log("error in foundig user in passport");
            return done(err);
        }
        if(!found_user||password!=found_user.password)
        {
            return done(null,false);
        }       
        done(null,found_user);
    });

}

));

passport.serializeUser(function(user,done)
{
    // console.log(user);
    done(null,user.id);
});

passport.deserializeUser(function(id,done)
{
    user.findById(id,function(err,found_user){
        if(err)
        {
            console.log("error",err);
            done(err);
        }
        if(!found_user)
        {
            console.log("user not found passport");
            done(null,false);
        }
        done(null,found_user);
    })
});
