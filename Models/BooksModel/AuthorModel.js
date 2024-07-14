const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
    },
    email:{
        type:String,
    },
    Address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'address',
    }],
    Books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books',
    }],
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

const AuthorModel = mongoose.model('author',AuthorSchema);
module.exports = AuthorModel;