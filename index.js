const express=require("express");
const db=require("./config/mongodb_config");
const cookie=require("cookie-parser");
const port=8000;
const app=express();
const layout=require("express-ejs-layouts");
const router =require("./routes/home")

// setting in app the view engine as ejs
app.set("view engine","ejs");
app.set("views","views");
// setting up layout 
app.set("layout extractScripts",true);
app.set("layout extractStyles",true);

// using layout middleware
app.use(layout);
// using cookie-parser middleware
app.use(cookie());


// setting directory for static files in middleware
app.use(express.static("./assets"));

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