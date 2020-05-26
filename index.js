const express=require("express");
const db=require("./config/mongodb_config");
const cookie=require("cookie-parser");
const port=8000;
const app=express();
const layout=require("express-ejs-layouts");
const router =require("./routes/home")
// for settingup passport
const passport =require("passport");
const passportLocal=require("./config/passport_config");
const session=require("express-session");
const connectMongo=require("connect-mongo")(session);
const scss=require("node-sass-middleware");

// using sass middleware
app.use(scss({
    src:"./assets/scss",
    dest:"./assets/css",
    debug:false,
    outputStyle:'extended',
    prefix:'/css'


}));

// setting in app the view engine as ejs
app.set("view engine","ejs");
app.set("views","views");
// setting up layout 
app.set("layout extractScripts",true);
app.set("layout extractStyles",true);

// settingup express-session
app.use(session(
{
    name:"socialMedia",
    secret:"socialApp",
    saveUninitialized:false,
    resave:false,
    cookie:{maxAge:(1000*60*100)},
    store: new connectMongo(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },
        function(err)
        {
            if(err)
            {
                return console.log(err);
            }
            console.log("session is being stored");
        })
}

));
app.use(passport.initialize());
app.use(passport.session());
// fetching data from forms
app.use(express.urlencoded());

// using layout middleware
app.use(layout);
// using cookie-parser middleware
app.use(cookie());


// setting directory for static files in middleware
app.use(express.static("./assets"));


// sending user details to locals 
app.use(
    function(req,res,next){
        if(req.isAuthenticated())
        {res.locals.user=req.user;}
        next();
    }
);

// using router to set controller
app.use("/",router);
// setting up server
app.listen(port,function(err){
    if(err)
    {
        console.log("error in listening");
        return ;
    }
    console.log("connected to server");
});