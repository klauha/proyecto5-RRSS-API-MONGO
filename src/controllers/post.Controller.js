import Post from "../models/Post.js";

export const createPost= async (req, res)=>{
   
  try{
   
    const userId = req.tokenData.userId
    const content = req.body.content

const newPost= await Post.create(
    {
        userId:userId,
        content:content
    });

    res.status(201).json({
        success: true,
        message: "Post created succesfully",
        data: newPost,
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Post cant be created",
        error: error,
    });
}
};