import Vecino from "../../models/Vecino.js"

const updateVecino = async(req,res,next)=> {
    try {
        let updateVecino = await Register.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (updateVecino) {
            return res.status(200).json({ response: updateVecino,
            message: "Vecino successfully updated"})
        } else {
            return res.status(404).json({ response: 'not found' })
        }    
    } catch(error) {
        next(error)
    }
}



export default updateVecino