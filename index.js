const express=require("express");
const db=require("./config/mongodb_config");
const port=8000;
const app=express();
const layout=require("express-ejs-layouts");

// setting in app the view engine as ejs
app.set("view engine","ejs");
app.set("views","views");

app.set("layout extractScripts");
app.set("layout extractStyles");

app.use(layout);


// setting directory for static files in middleware

app.use(express.static("./assets"));
app.get("/",function(req,res,next){
    res.render("home");
});


app.listen(port,function(err){
    if(err)
    {
        console.log("error in listening");
        return ;
    }
    console.log("connected to server");
});