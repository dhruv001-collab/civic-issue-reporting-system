import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    _id : {
        type:Number,
        required : true
    },
    name:{
        type: String,
        required : true
    },
    comment:{
        type:String,
        required : true
    },
    ReportId:{
        type: Number,
        required : true,
    },
    image:{
        type: String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

const Comment = mongoose.model("Comment",commentSchema);

export default Comment;