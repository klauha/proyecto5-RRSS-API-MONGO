import mongoose, { Schema, model } from "mongoose"

const PostSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        // img: {
        //     type: URL,
        //     required: false,
        // },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'   
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Post = model("Post", PostSchema)

export default Post