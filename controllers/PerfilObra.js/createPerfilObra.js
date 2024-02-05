import PerfilObra from "../../models/PerfilObra.js"

const createPerfilObra = async (req, res) =>{
    try {
        const newPerfilObra = new PerfilObra(
            {
      unidadVecinal: req.body.unidadVecinal,
      rampas: req.body.rampas,
      personas: req.body.personas,
      hormigonV: req.body.hormigonV,
      nombreEmpresa: req.body.nombreEmpresa,
      direccion: req.body.direccion,
      tipoDeConstruccion: req.body.tipoDeConstruccion,
      rubroConstruccion: req.body.rubroConstruccion,
      img: req.body.imageUrl, 
            }
        )
        await newPerfilObra.save()
        return res.status(201).json({
            success: true,
            response: newPerfilObra,
            message: "Perfil obra created"
        })
       
    } catch (error) {
        console.error('Error al crear el perfil de obra:', error);
        console.error('Error detallado:', error.stack);
        return res.status(500).json({
          success: false,
          response: null,
          message: `Error interno del servidor: ${error.message}`,
        
    })}
}

export default createPerfilObra