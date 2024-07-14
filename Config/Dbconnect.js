const mongoose = require("mongoose")

const mongourl="mongodb+srv://darpansarda7:darpan@cluster0.lduhcny.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const DbConnect=()=>{
    return mongoose.connect(mongourl);
}

module.exports={DbConnect}