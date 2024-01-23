import PerfilObra from "../../models/PerfilObra.js"

export default async function (req, res) {
    try {
        const perfilObraId = req.query._id;

        // Verificar si el ID proporcionado es válido (puedes agregar más validaciones según tus necesidades)
        if (!perfilObraId) {
            return res.status(400).json({
                success: false,
                response: 'Bad Request',
                message: 'Se requiere un ID de perfilobra válido.'
            });
        }

        // Buscar la empresa por ID
        const perfilObra = await PerfilObra.findById(perfilObraId);

        // Verificar si la empresa existe
        if (!perfilObra) {
            return res.status(404).json({
                success: false,
                response: 'Not Found',
                message: 'Perfil Obra no encontrado.'
            });
        }

        return res.status(200).json({
            success: true,
            response: 'ok',
            message: '/PerfilObra',
            perfilObra
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