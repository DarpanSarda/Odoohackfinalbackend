const BookModel = require("../../Models/BooksModel/BooksModel");
const VolumeModel = require("../../Models/BooksModel/VolumeModel");

const GetBookByISBN = async(req,res)=>{
    const {ISBNID} = req.query;
    try {
        let bookvol = VolumeModel.findOne({ISBN:ISBNID});
        let books = BookModel.findOne({volumes:bookvol._id}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        if(!books)
        {
            return res.status(404).send({
                message:'No book found'
            })
        }
        return res.status(200).send({
            message:books
        })

    } catch (error) {
        return res.status(500).send({
            message:error.message
        })
    }
}

module.exports = GetBookByISBN;