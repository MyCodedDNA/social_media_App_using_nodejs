const mongoose =require("mongoose");
const schema=mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    user_data:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    post_data:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'posts'
    }
},{
    timestamp:true
}
);

const comments=mongoose.model("comments",schema);
module.exports=comments;