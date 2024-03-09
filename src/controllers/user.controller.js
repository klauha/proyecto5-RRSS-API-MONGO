import User from "../models/User.js"

export const getUsers = async (req, res) => {

    try {
        const users = await User.find().select("-password")
        res.status(200).json({
            success: true,
            message: "Users retrieved succesfully",
            data: users
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

// PROFILE

export const getProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const profile = await User.findById(userId).select(["-password","-role"])

        res.status(200).json({
            success: true,
            message: "Profile retrieved succesfully",
            data: profile
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile can't be retrieved",
            error: error.message
        })
    }
}