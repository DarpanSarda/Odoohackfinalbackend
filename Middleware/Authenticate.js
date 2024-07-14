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
        const userId = jwtProvider.getUserIdfromtoken(token);
        const user = await UserModel.findById(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:error.message,
        })
    }
    next();
}

module.exports = authenticate;