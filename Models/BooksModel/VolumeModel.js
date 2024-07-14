const mongoose = require('mongoose');

const VolumeSchema = mongoose.Schema({
    Volno:{
        type:Number,
        default:1,
    },
    ISBN:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
    },
    PublicationYear:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
        default:10,
    },
    Book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books',
    },
})

const VolumeModel = mongoose.model('volume',VolumeSchema);
module.exports = VolumeModel;