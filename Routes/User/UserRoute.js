const express = require('express');
const LoginController = require('../../Controllers/Auth/LoginController');
const SignupController = require('../../Controllers/Auth/SignupController');
// const GetProfileByEmail = require('../../Controller/User/GetProfileByEmail');
const router = express.Router();


router.post("/login",LoginController);
router.post("/signup",SignupController);
// router.get("/",GetProfileByEmail);
module.exports = router;