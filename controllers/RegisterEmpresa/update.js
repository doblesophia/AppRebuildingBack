import Empresa from "../../models/Empresa.js"

const updateEmpresa = async(req,res,next)=> {
    try {
        let updateEmpresa = await Empresa.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updateEmpresa) {
            return res.status(200).json({ response: updateEmpresa,
            message: "Empresa successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        next(error)
    }
}



export default updateEmpresa