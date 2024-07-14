const IssueModel = require("../../Models/Issue/IssueModel");

const CreateIssue = async(req,res)=>{
    let user = await req.user;
    console.log(user)
    let {book,volume,duration} = req.body;
    try {
        let alreadyexist = await IssueModel.findOne({user:user._id , book:book , volume:volume, status: "ISSUED" || "REQUESTED"});
        console.log("hellooo",alreadyexist)
        if(alreadyexist)
        {
            return res.status(300).send({
                message:"Your book is already issued or rquest is pending",
                success:false,
            })
        }
        const futureDate = new Date(Date.now());
        futureDate.setDate(futureDate.getDate() + duration);
        console.log(futureDate)
        let Issue = new IssueModel({
            user:user._id,
            book:book,
            volume : volume,
            duration:duration,
            return_date: futureDate,
        })
        await Issue.save();
        return res.status(200).send({
            message:"Your book is requested please wait until it is accepted",
            success:true,
        })
    } catch (error) {
        return res.status(500).send({
            message:error.message,
            success:false
        })
    }
}
module.exports = CreateIssue;