const express=require("express");
const port=8000;
const app=express();

app.get("/",function(req,res,next){
    res.send("<h1>hi this is home</h1>");
});


app.listen(port,function(err){
    if(err)
    {
        console.log("error in listening");
        return ;
    }
    console.log("connected to server");
});