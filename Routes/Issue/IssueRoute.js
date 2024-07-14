const express = require('express');
const Createissue = require('../../Controllers/Issue/CreateIssue');
const authenticate = require('../../Middleware/Authenticate');
const router = express.Router();


router.post("/new",authenticate,Createissue);
module.exports = router;