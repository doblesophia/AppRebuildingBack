import PerfilVecino from "../../models/PerfilVecino.js"

const updatePerfilVecino= async(req,res,next)=> {
    try {
        let updatePerfilVecino = await PerfilVecino.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updatePerfilVecino) {
            return res.status(200).json({ response: updatePerfilVecino,
            message: "Perfil vecino successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        console.log("este mensaje muestra el error", error)
        return res.status(500).json({
            success: false,
            response: null,
            message: `error al updatear la solicitud, ${error.message}`
        })
        
    }
}

export default updatePerfilVecino