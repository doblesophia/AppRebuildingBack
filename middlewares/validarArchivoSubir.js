import { response } from "express"


const validarArchivoSubir = (req, res, next ) => {
    console.log('req.files:', req.files)
       // Verifica si hay archivos en la solicitud
       if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).json({
            msg: 'No hay archivos que subir - validarArchivoSubir'
        });
    }

    // Continúa con el siguiente middleware si hay archivos
    next();

}


export{
    validarArchivoSubir
}