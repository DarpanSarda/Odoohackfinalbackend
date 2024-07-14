const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    volumes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'volume',
    }],
    ParentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category',
    },
    Author:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'author',
    }],
    Image:
        {
            image1:{
                type:String,
            },
            image2:{
                type:String,
            },
            image3:{
                type:String,
            },
            image4:{
                type:String,
            }
        },
    stock:{
        type:String,
        default:"In",
    },
    ArrivingDays:{
        type:Number,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const BookModel = mongoose.model("books",BookSchema);
module.exports = BookModel;