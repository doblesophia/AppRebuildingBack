import PerfilVecino from "../../models/PerfilVecino.js"

const createPerfilVecino = async (req, res) =>{
    try {
        const newPerfilVecino = new PerfilVecino(req.body)
        await newPerfilVecino.save()
        return res.status(201).json({
            success: true,
            response: newPerfilVecino,
            message: "Perfil vecino created"
        })
       
    } catch (error) {
        console.error('Error al crear el perfil de vecino:', error);
        return res.status(400).json({
            success: false,
            response: null,
            message: `Error al crear el perfil de vecino: ${error.message}`
        })
        
    }
}

export default createPerfilVecino