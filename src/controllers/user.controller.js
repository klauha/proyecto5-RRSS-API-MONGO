import User from "../models/User.js"

export const getUsers = async (req, res)=>{
    // RECUPERAR LA DATA
    try {
        const users = await User.find()
        res.status(200).json ({
            success:true,
            message: "Users retrieved succesfully",
            data:users
        })
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "users can't be retrieved",
                error: error
            }
        )
        
    }
}