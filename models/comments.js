const mongoose =require("mongoose");
const schema=mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
},{
    timestamp:true
}
);

const comments=mongoose.model("comments",schema);
module.exports=comments;