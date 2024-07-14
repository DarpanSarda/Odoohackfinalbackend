const jwtProvider = require('../Config/JwtProvider');
const UserModel = require('../Models/UserModel/UserModel');
const authenticate = async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token)
        {
            return res.status(404).send({
                success:false,
                error:"Token Not Found...."
            })
        }
        const userId = await jwtProvider.getUserIdfromtoken(token);
        const user = await UserModel.findById(userId);
        if(user.role === 'librarian' || 'admin')
        {
            req.librarian = user;
            console.log("librarian")
        }
        if(user.role === 'admin')
        {
            req.admin = user;
        }
        else
        {
            req.user = user;
        }
        // console.log(req)
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:error.message,
        })
    }
    next();
}

module.exports = authenticate;