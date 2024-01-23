import Admin from "../../models/Admin.js"

const createAdmin = async (req, res) =>{
    try {
        const newAdmin = new Admin(req.body)
        await newAdmin.save()
        return res.status(201).json({
            success: true,
            response: newAdmin,
            message: "Admin created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createAdmin