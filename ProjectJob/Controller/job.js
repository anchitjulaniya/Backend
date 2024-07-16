const JobModel = require('../Model/job')

const createJob = async (req, res)=>{   
    try{
        const newlyInsertedJob = await JobModel.create(req.body);
        res.json({
            status : true,
            message : "Job Created Successfully!"
        })
        console.log(newlyInsertedJob);
    }
    catch(error){  
        console.log(error);
        res.json({
            status : false,
            message : "Something went wrong, please try again after sometime!",
            error : error
        })
    }

}
const listJob = async (req, res)=>{
    const jobList = await JobModel.find();
    res.json({
        status : true,
        message : "Job List",
        results : jobList
    })


}
const updateJob = async (req, res)=>{
    try{
        const id = req.params.jobId;
    const update = {
        $set : req.body
    }
    const updatedJob = await JobModel.findByIdAndUpdate(id, update);
    res.json({
        status : true,
        message : "Job Updated Successfully!"
    })
    console.log(updateJob);
    }
    catch(error){
        console.log(error);
        res.json({
            status : false,
            message : "Something went wrong, please try again after sometime!",
            error : error
        })
    }


}
const deleteJob = async (req, res)=>{
    try{
        console.log(req.params)
        const id = req.params.jobId;
    const deletedJob = await JobModel.findByIdAndDelete(id);
    res.json({
        status : true,
        message : "Job Deleted Successfully!"
    })
    console.log(id, "Delete this job id");
    }
    catch(error){
        console.log(error);
        res.json({
            status : false,
            message : "Something went wrong, please try again after sometime!",
            error : error
        })
    }


}

const jobController = {
    createJob,
    listJob,
    updateJob,
    deleteJob
}

module.exports = jobController;

