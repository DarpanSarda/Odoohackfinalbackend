const AuthorModel = require("../../Models/BooksModel/AuthorModel");
const BookModel = require("../../Models/BooksModel/BooksModel");
const CategoryModel = require("../../Models/CategoryModel/CategoryModel");

const GetBooksSearch = async(req,res)=>{
    const {search} = req.query
    try {
        let books={};
        let authorbooks={};
        let titlebooks={};
        let categorybooks = {};

        let author = await AuthorModel.findOne({Name: {$regex: ".*"+search+".*",$options:'i'}});
        console.log(author)
        if(author)
        {
            console.log(author._id)
            authorbooks = await BookModel.find({Author:author._id}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        }
        titlebooks = await BookModel.find({Title:{$regex: ".*"+search+".*",$options:'i'}}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        let cate = await CategoryModel.findOne({name: {$regex: ".*"+search+".*",$options:'i'}});
        if(cate)
        {
            console.log("categoryy",cate)
            categorybooks = await BookModel.find({Category:cate}).populate("ParentCategory").populate("Category").populate("volumes").populate("Author");
        }
        if(authorbooks.length>0)
        {
            books['author'] = authorbooks;
        }
        if(titlebooks.length>0)
        {
            books['title'] = titlebooks;
        }
        if(categorybooks.length>0)
        {
            books['cate'] = categorybooks;
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