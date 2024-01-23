import PerfilObra from "../../models/PerfilObra.js"

const createPerfilObra = async (req, res) =>{
    try {
        const newPerfilObra = new PerfilObra(req.body)
        await newPerfilObra.save()
        return res.status(201).json({
            success: true,
            response: newPerfilObra,
            message: "Perfil obra created"
        })
       
    } catch (error) {
        console.error('Error al crear el perfil de obra:', error);
        return res.status(400).json({
            success: false,
            response: null,
            message: `Error al crear el perfil de obra: ${error.message}`
        })
        
    }
}

export default createPerfilObra