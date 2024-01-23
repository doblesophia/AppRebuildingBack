import Admin from "../../models/Admin.js"

const updateAdmin = async(req,res,next)=> {
    try {
        let updateAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updateAdmin) {
            return res.status(200).json({ response: updateAdmin,
            message: "Admin successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        next(error)
    }
}

export default updateAdmin