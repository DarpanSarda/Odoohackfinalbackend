const mongoose = require('mongoose');

const TrendingSchema = mongoose.Schema({
    books:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books',
    }
})

const TrendingModel = mongoose.model('trending',TrendingSchema);
module.exports = TrendingModel;