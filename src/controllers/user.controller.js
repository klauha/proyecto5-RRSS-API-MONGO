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

export const updateProfile = async (req, res) => {
    try {
        const userId = req.tokenData.userId
        const firstName = req.body.firstName
        const lastName = req.body.lastName

        if (!userId) {
            res.status(400).json(
                {
                    success:true,
                    message: "userId required"
                }   
            )
           }
        
    const profileToUpdate = await User.findOneAndUpdate(
        {
            _id: userId
          },
          {
            firstName:firstName,
            lastName: lastName
          },
        
          {
            new: true
          }
    )
    res.status(200).json(
        {
          success: true,
          message: "Profile updated",
          data: profileToUpdate
        }
      )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile can't be updated",
            error: error.message
        
    })
}
}