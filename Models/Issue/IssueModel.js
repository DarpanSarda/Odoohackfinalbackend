const mongoose = require('mongoose')

const IssueSchema = mongoose.Schema({
    book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    Volume:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'volume',
    },
    duration:{
        type:Number,
    },
    return_date:{
        type:Date,
    },
    Status:{
        type:String,
        default:"ISSUED",
        enum:["REQUESTED","ISSUED","RETURNED","OVERDUE 3 DAYS","OVERDUE 5 DAYS","OVERDUE 10 DAYS", "REMAINING 3 DAYS", "REMAINING 5 DAYS", "REMAINING 7 DAYS"]
    },
    Payment_status : {
        type:String,
        default:"PENDING",
        enum:["PENDING","CANCELLED","SUCCESS"]
    }
})

const IssueModel = mongoose.model('issue',IssueSchema);
module.exports = IssueModel;