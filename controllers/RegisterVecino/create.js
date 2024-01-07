import Vecino from "../../models/Vecino.js"

const createVecino = async (req, res) =>{
    try {
        const newVecino = new Vecino(req.body)
        await newVecino.save()
        return res.status(201).json({
            success: true,
            response: newVecino,
            message: "Vecino created"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
        
    }
}

export default createVecino