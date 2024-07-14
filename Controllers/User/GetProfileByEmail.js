const { getUserIdfromtoken } = require("../../Config/JwtProvider");
const UserModel = require("../../Models/UserModel/UserModel");

const GetProfileByEmail = async(req,res)=>{
    try {
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt)
        {
            return res.status(404).send({
                error:"User Not Found",
                success:true
            })
        }

        const userId = getUserIdfromtoken(jwt);
        const user = await UserModel.findById(userId);

        if(!user)
        {
            return res.status(500).send({
                message:"user not found",
                success:false
            })    
        }
        return res.status(500).send({
            message:user,
            success:true
        })
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = GetProfileByEmail;