import Post from "../models/Post.js";

const createPost = async (req, res) => {

    try {

        const userId = req.tokenData.userId
        const content = req.body.content

        const newPost = await Post.create(
            {
                userId: userId,
                content: content
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
}

const deletePostById = async (req, res) => {
    try {
        const postId = req.params.postId
        const userId = req.tokenData.userId

        // if (!postId) {
        //     res.status(404).json({
        //         succes: false,
        //         message: "Post not found"
        //     })
        // }
        const postDeleted = await Post.findOneAndDelete({
            postId: postId,
            userId: userId
        })


        res.status(200).json({
            success: true,
            message: "Post deleted",
            data: postDeleted
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be deleted",
            error: error,
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const postId = req.params.postId
        const userId = req.tokenData.userId
        const content = req.body.content

        const postToUpdate = await Post.findOneAndUpdate(
            {
                userId: userId,
                postId: postId
            },
            {
                content: content
            },

            {
                new: true
            }
        )
        res.status(200).json({
            success: true,
            message: "Post updated",
            data: postToUpdate
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be updated",
            error: error,
        })
    }
}

const getMyPosts= async (req, res)=>{
try {
    const userId= req.tokenData.userId

    const myPosts = await Post.find(
        {
            userId: userId
        }
    )
    res.status(200).json({
        success: true,
        message: "Posts retrieved",
        data: myPosts
    })

    
} catch (error) {
    res.status(500).json({
        success: false,
        message: "Post cant be retrieved",
        error: error,
    })
}


}




export { createPost, deletePostById, updatePost , getMyPosts}