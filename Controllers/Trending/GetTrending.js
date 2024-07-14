const BookModel = require("../../Models/BooksModel/BooksModel");
const TrendingModel = require("../../Models/Trending/TrendingModel");

const Gettrending = async(req,res)=>{
    try {
        let trendbook = await TrendingModel.find({});
        console.log(trendbook)
        let books = await BookModel.find({_id:trendbook[0].books}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author")
        return res.status(200).send({
            books
        })
    } catch (error) {
        return res.status(500).send({
            success:false,
            error:error.message
        })
    }
}

module.exports = Gettrending;