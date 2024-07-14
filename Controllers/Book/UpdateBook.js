const BookModel = require("../../Models/BooksModel/BooksModel");

const UpdateBook = async(req,res)=>{
    const {librarian} = req.librarian;
    if(librarian)
    {
        let {bookid} = req.params.id;
        try {
            const book = await BookModel.findById()
            
        } catch (error) {
            return res.status(500).send({
                success:false,
                error:error.message
            })
        }
    }
}
module.exports = UpdateBook;