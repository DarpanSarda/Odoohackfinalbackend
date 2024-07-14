const UserModel = require("../../Models/UserModel/UserModel")

const GetAllUser = async(req,res)=>{
    try {
        const users = UserModel.find();
        return res.status(200).send({
            users
        })
        
    } catch (error) {
        return res.status(500).send({
            message:error.message,
        })
    }
}
module.exports = GetAllUser;