const jwtProvider = require('../../Config/JwtProvider');
const bcrypt = require('bcrypt');
const UserModel = require('../../Models/UserModel/UserModel');

const SignupController = async(req,res)=>{
    try {
        let{Name,email,password,role} = req.body;
        const userexist = await UserModel.findOne({email:email});
    
        if(userexist)
        {
            return res.status(400).send({
                success:false,
                message:"User already exist",
            })
        }
        password = await bcrypt.hash(password,8);
        let user;
        if(role)
            user = await UserModel.create({Name,email,password,role});        
        else
            user = await UserModel.create({Name,email,password});
        console.log(user)
        const jwt = jwtProvider.generateToken(user._id);

        return  res.status(200).send({
            jwt,
            message:"User Created Success",
            success:true
        })

    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}

module.exports = SignupController;