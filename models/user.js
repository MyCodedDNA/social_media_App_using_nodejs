const mongoose=require("mongoose");
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},
{
    timestamp:true
});

const user=mongoose.model('social_media_app',schema);

module.exports=user;