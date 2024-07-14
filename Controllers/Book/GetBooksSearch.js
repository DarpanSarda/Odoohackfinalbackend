const AuthorModel = require("../../Models/BooksModel/AuthorModel");
const BookModel = require("../../Models/BooksModel/BooksModel");
const CategoryModel = require("../../Models/CategoryModel/CategoryModel");

const GetBooksSearch = async(req,res)=>{
    const {search} = req.query
    try {
        let books=[];
        let authorbooks=[];
        let titlebooks=[];
        let categorybooks = [];

        let author = await AuthorModel.findOne({Name:search});
        console.log(author)
        if(author)
        {
            console.log(author._id)
            authorbooks = await BookModel.find({Author:author._id}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        }
        titlebooks = await BookModel.find({Title:search});
        let cate = await CategoryModel.findOne({name:search});
        if(cate)
        {
            console.log("categoryy",cate)
            categorybooks = await BookModel.find({Category:cate}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        }
        if(authorbooks.length>0)
        {
            books.push(authorbooks);
        }
        if(titlebooks.length>0)
        {
            books.push(titlebooks);
        }
        if(categorybooks.length>0)
        {
            books.push(titlebooks);
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

module.exports = GetBooksSearch;