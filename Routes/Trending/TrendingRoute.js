const express = require('express');
const Addtrending = require('../../Controllers/Trending/AddTrending');
const Gettrending = require('../../Controllers/Trending/GetTrending');
const router = express.Router();


router.post("/add",Addtrending);
router.get("/",Gettrending);
module.exports = router;