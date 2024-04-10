import Post from "../models/Post.js";

const createPost = async (req, res) => {

    try {

        const userId = req.tokenData.userId
        const content = req.body.content
        const urlImg = req.body.urlImg

        const newPost = await Post.create(
            {
                userId: userId,
                content: content,
                urlImg: urlImg
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
        const postId = req.params.id
        const userId = req.tokenData.userId

        // if (!postId) {
        //     res.status(404).json({
        //         succes: false,
        //         message: "Post not found"
        //     })
        // }
        const postDeleted = await Post.findOneAndDelete(
            { _id: postId },
            { userId: userId }
        )


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
        const postId = req.params.id
        const userId = req.tokenData.userId
        const content = req.body.content

        const postToUpdate = await Post.findOneAndUpdate(
            {
                userId: userId,
                _id: postId
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

const getMyPosts = async (req, res) => {
    try {
        const userId = req.tokenData.userId

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

const getPosts = async (req, res) => {
    try {

        const allPosts = await Post.find()
        res.status(200).json({
            success: true,
            message: "Posts retrieved",
            data: allPosts
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Posts cant be retrieved",
            error: error.message,
        })
    }
}

const getPostById = async (req, res) => {
    try {
        const postId = req.params.id
      
        const post = await Post.findOne(
            {
            _id: postId
            }
        )
            console.log(post);
        // if (!post) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Post not found",
        //       
        //     })
        // }

        res.status(200).json({
            success: true,
            message: "Post retrieved",
            data: post
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be retrieved",
            error: error.message,
        })
    }
}
const getAllUserPosts = async (req, res) => {
    try {
        const userId = req.params.id

        const allUserPosts = await Post.find({ userId }).populate("userId")


        res.status(200).json({
            success: true,
            message: "Posts retrieved successfully",
            data: allUserPosts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be retrieved",
            error: error,
        })
    }
}

const addLikes = async (req, res) => {
    try {
        const postId = req.body.postId
        const userId = req.tokenData.userId

        const post = await Post.findOne(
            {
                _id: postId
            }
        )
        if (!post) {
            return res.status(404).json(
                {
                    success: false,
                    message: "No posts found for this user",
                }
            );
        }
        const postLiked = post.likes.includes(userId);
        let responseMessage = "dislike succesfully"
        if (postLiked) {
            post.likes.pull(userId)
        } else {
            post.likes.push(userId)
            responseMessage = "like succesfully"
        }
        // postLiked ?  post.likes.pull(userId) :  post.likes.push(userId)

        await post.save()

        res.status(200).json({
            success: true,
            message: responseMessage,
            data: post
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Post cant be updated",
            error: error.message,
        })
    }
}


export {
    createPost,
    deletePostById,
    updatePost,
    getMyPosts,
    getPosts,
    getPostById,
    getAllUserPosts,
    addLikes,
}