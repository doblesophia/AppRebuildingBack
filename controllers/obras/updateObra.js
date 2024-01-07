import Obra from "../../models/Obra.js"

const updateObra = async(req,res,next)=> {
    try {
        let updateObra = await Obra.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updateObra) {
            return res.status(200).json({ response: updateObra,
            message: "Empresa successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        next(error)
    }
}



export default updateObra