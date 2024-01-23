import Admin from "../../models/Admin.js"

export default async function (req, res) {
    try {
        const adminId = req.query._id;

        // Verificar si el ID proporcionado es válido (puedes agregar más validaciones según tus necesidades)
        if (!adminId) {
            return res.status(400).json({
                success: false,
                response: 'Bad Request',
                message: 'Se requiere un ID de admin válido.'
            });
        }

        // Buscar la empresa por ID
        const admin = await Admin.findById(adminId);

        // Verificar si la empresa existe
        if (!admin) {
            return res.status(404).json({
                success: false,
                response: 'Not Found',
                message: 'Admin no encontrado.'
            });
        }

        return res.status(200).json({
            success: true,
            response: 'ok',
            message: '/RegisterAdmin',
            empresa
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