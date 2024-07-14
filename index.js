const express = require('express');
const cors = require('cors');
const {DbConnect} = require('./Config/Dbconnect');
const UserRoute = require("./Routes/User/UserRoute");
const BookRoute = require("./Routes/Books/BookRoute");
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{res.send("hello")})

app.use("/api/v1/auth",UserRoute);
app.use("/api/v1/books",BookRoute);
app.listen(PORT,async()=>{
    await DbConnect();
    console.log("server started")
})