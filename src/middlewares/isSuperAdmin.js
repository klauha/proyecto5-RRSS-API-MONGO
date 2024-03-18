
export const isSuperAdmin = async (req, res, next) => {

   
    
    if (req.tokenData.roleName !== "super_admin") {
        return res.status(403).json({
            success: false,
            message: "UNAUTHORIZED"
        })
    }
    next()
}