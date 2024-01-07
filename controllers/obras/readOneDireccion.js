import Direccion from "../../models/Direccion.js";

export const getDireccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const direccion = await Direccion.findById(id);

    if (!direccion) {
      return res.status(404).json({
        success: false,
        response: 'Not Found',
        message: 'Dirección no encontrada.'
      });
    }

    return res.status(200).json({
      success: true,
      response: 'ok',
      message: 'Dirección encontrada.',
      direccion
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      response: 'Internal Server Error',
      message: 'Error interno del servidor.'
    });
  }
};

export default getDireccionById