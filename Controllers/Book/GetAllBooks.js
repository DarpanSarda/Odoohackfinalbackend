const BookModel = require("../../Models/BooksModel/BooksModel");

const GetAllBooks = async(req,res)=>{
    try {
        const books = await BookModel.find().populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        if(!books)
        {
            return res.status(404).send({
                success:false,
                message:"No Products Found"
            })
        }
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

module.exports = GetAllBooks;