const TrendingModel = require("../../Models/Trending/TrendingModel");

const Addtrending = async(req,res)=>{
    let librarian = req.librarian;
    let{book} = req.body;
    try {
        let exist = await TrendingModel.findOne({book});
        if(exist)
        {
            return res.status(400).send({
                message:"Product already there"
            })
        }
        let trendbook = new TrendingModel({books:book});
        await trendbook.save();
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

module.exports = Addtrending;