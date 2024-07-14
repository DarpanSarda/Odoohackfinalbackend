const express = require('express');
const AddBook = require('../../Controllers/Book/AddBook');
const router = express.Router();


router.post("/add",AddBook);
module.exports = router;