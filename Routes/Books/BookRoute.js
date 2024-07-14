const express = require('express');
const AddBook = require('../../Controllers/Book/AddBook');
const authenticate = require('../../Middleware/Authenticate');
const GetAllBooks = require('../../Controllers/Book/GetAllBooks');
const GetBooksSearch = require('../../Controllers/Book/GetBooksSearch');
const GetBookByISBN = require('../../Controllers/Book/GetBookByISBNid');
const router = express.Router();


router.post("/add",authenticate,AddBook);
router.get("/",authenticate,GetAllBooks);
router.get("/search",authenticate,GetBooksSearch);
router.get("/search/isbn",authenticate,GetBookByISBN);
module.exports = router;