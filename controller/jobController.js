const {Job} = require("../model/index")

const  createjob = async(req,res)=>{
    const {title, description, company, location, salary}= req.body;

    if(!title || !description || !location){
        return res.status(400).json({message:"Please provide all required fields"})
    }

    const job = await Job.create({
        title,
        description,
        location,
        company,
        salary,
        userId:"1fa6485b-4934-4656-9dc1-5c5bdb4774de"
    })

    res.status(201).json({message:"Job created successfully", job}) 
}

module.exports={createjob}