import mongoose from "mongoose";


const ReportIssue = new mongoose.Schema({
    _id:{
        type:Number,
        required : true
    },
    Issue_title:{
        type:String,
        required : true,
    },
    email:{
        type:String,
        required : true
    },
    location:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required : true,
    },
    category:{
        type:String,
        required : true
    },
    image:{
        type:String,
        required : true
    },
    urgency:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
})

const Report = mongoose.model("Report",ReportIssue);

export default Report;