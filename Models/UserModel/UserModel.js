const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"Customer",
        enum:["Customer","Librarian","Admin"],
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
const UserModel = mongoose.model("users",UserSchema);
module.exports = UserModel;