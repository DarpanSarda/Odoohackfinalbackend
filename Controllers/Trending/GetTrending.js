const TrendingModel = require("../../Models/Trending/TrendingModel");

const Gettrending = async(req,res)=>{
    try {
        let trendbook = await TrendingModel.find().populate('book');
        return res.status(200).send({
            trendbook
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = Gettrending;