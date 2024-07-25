const routes = require('../Routes/post')//
const postModel = require('../Model/post')
const { v4: uuidv4 } = require('uuid');

const createPost = async (req, res)=> {
    try{
    const post = {
        title : req.body.title,
        content : req.body.content,
        uuid : uuidv4()
    }
    // console.log(req.body)
    const newPost = await postModel.create(post)
    
    console.log("new post", newPost);

        res.json({
            status : true,
            message : "Post Created Successfully",
            post : newPost
        })
    }catch(error){
        res.json({
            status : false,
            message : "Something Went Wrong. PLease try again!",
            errorMessage : error
        })
    }
}
const getAllPost = async (req, res)=>{
    try{
        const allPost  = await postModel.find()

        res.json({
            status : true,
            message : "Successfully",
            result : allPost
        })
    }catch(error){
        res.json({
            status : false,
            message : "Something Went Wrong. PLease try again!",
            errorMessage : error
        })
    }
}

const getSinglePost = async (req, res)=>{
    try{
        const id = req.params.postId
        console.log(id);
        const Post  = await postModel.findById(id)
        res.json({
            status : true,
            message : "Successfully",
            result : Post
        })
    }catch(error){
        res.json({
            status : false,
            message : "Something Went Wrong. PLease try again!",
            errorMessage : error
        })
    }
}
const updatePost = async (req, res)=>{
    try{
        const id = req.params.postId;
        const updatedPost = {
            title : req.body.title,
            content : req.body.content
        }
        const updatingPost = await postModel.findByIdAndUpdate(id, updatedPost)

        res.json({
            status : true,
            message : "Post Updated Successfully",
            updatedPost : updatingPost
        })

    }catch(error){
        res.json({
            status : false,
            message : "Something Went Wrong. PLease try again!",
            errorMessage : error
        })
    }
}
const deletePost = async (req, res)=>{
    try{
        const id = req.params.postId;
        console.log(id)
        const deletePost = await postModel.findByIdAndDelete(id)
        console.log(deletePost)
        
        res.json({
            status : true,
            message : "Post Deleted Successfully",
        })
    }catch(error){
        res.json({
            status : false,
            message : "Something Went Wrong. PLease try again!",
            errorMessage : error
        })
    }
}

const postController = {
    createPost,
    getSinglePost,
    getAllPost,
    updatePost,
    deletePost
}

module.exports = postController