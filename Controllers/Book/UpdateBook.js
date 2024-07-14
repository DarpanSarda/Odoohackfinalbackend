const BookModel = require("../../Models/BooksModel/BooksModel");

const UpdateBook = async(req,res)=>{
    const librarian = await req.librarian;
    console.log(req.librarian)
    console.log("lib",librarian)
    if(librarian)
    {
        let bookid = await req.params.id;
        console.log(bookid)
        try {
            const book = await BookModel.findById(bookid);
            console.log(book)
            console.log("hello")
            
            
        } catch (error) {
            return res.status(500).send({
                success:false,
                error:error.message
            })
        }
    }
}
module.exports = UpdateBook;