const mongoose =require("mongoose");
const schema=mongoose.Schema({
    post:{
        type:String,
        required:true
    },
    user_data:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comments'
    }]
},{

    timestamp:true
}
);

const posts=mongoose.model("posts",schema);
module.exports=posts;