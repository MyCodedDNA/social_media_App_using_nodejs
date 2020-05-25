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
const user=mongoose.model('userdb',schema);

module.exports=user;