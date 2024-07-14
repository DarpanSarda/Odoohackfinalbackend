const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    level:{
        type:String,
    }
})

const CategoryModel = mongoose.model('category',CategorySchema);
module.exports = CategoryModel;