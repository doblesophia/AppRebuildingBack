import Obra from "../../models/Obra.js"
import Direccion from "../../models/Direccion.js";

export default async function (req, res) {
    try {
        // Verificar si la solicitud es para obtener direcciones
        if (req.url === '/direcciones') {
            const direcciones = await Direccion.find();
            return res.status(200).json({
                success: true,
                response: 'ok',
                message: 'Direcciones encontradas.',
                direcciones
            });
        }

        // Si no es para obtener direcciones, entonces asumimos que es para obtener una obra por ID
        const obraId = req.params.id;

        // Verificar si el ID proporcionado es válido
        if (!obraId) {
            return res.status(400).json({
                success: false,
                response: 'Bad Request',
                message: 'Se requiere un ID de obra válido.'
            });
        }

        // Buscar la obra por ID
        const obra = await Obra.findById(obraId);

        // Verificar si la obra existe
        if (!obra) {
            return res.status(404).json({
                success: false,
                response: 'Not Found',
                message: 'Obra no encontrada.'
            });
        }

        return res.status(200).json({
            success: true,
            response: 'ok',
            message: 'Obra encontrada.',
            obra
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            response: 'Internal Server Error',
            message: 'Error interno del servidor.'
        });
    }
}