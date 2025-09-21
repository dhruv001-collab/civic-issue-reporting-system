import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required : true
    },
    name:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required : true
    },
    subject:{
        type:String,
        required : true,
    },
    message:{
        type:String,
        required : true,
    }
})

const Contact = mongoose.model("Contact",ContactSchema);

export default Contact;