import PerfilObra from "../../models/PerfilObra.js"

const updatePerfilObra = async(req,res,next)=> {
    try {
        let updatePerfilObra = await PerfilObra.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updatePerfilObra) {
            return res.status(200).json({ response: updatePerfilObra,
            message: "Perfil Obra successfully updated"})
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

export default updatePerfilObra