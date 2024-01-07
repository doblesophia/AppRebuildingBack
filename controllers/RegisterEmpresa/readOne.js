import Empresa from "../../models/Empresa.js"

export default async function (req, res) {
    try {
        const empresaId = req.query._id;

        // Verificar si el ID proporcionado es válido (puedes agregar más validaciones según tus necesidades)
        if (!empresaId) {
            return res.status(400).json({
                success: false,
                response: 'Bad Request',
                message: 'Se requiere un ID de empresa válido.'
            });
        }

        // Buscar la empresa por ID
        const empresa = await Empresa.findById(empresaId);

        // Verificar si la empresa existe
        if (!empresa) {
            return res.status(404).json({
                success: false,
                response: 'Not Found',
                message: 'Empresa no encontrada.'
            });
        }

        return res.status(200).json({
            success: true,
            response: 'ok',
            message: '/RegisterEmpresa',
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