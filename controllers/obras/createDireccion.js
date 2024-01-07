import Direccion from "../../models/Direccion.js";

const createObraDireccion = async (req, res) => {
  try {
    // Extrae el componente necesario del cuerpo de la solicitud
    const { direccion, location, viewport } = req.body;

    // Crea un objeto de obra con el componente extraído
    const newAddress = new Direccion({
      direccion,
      location,
      viewport
    });

    // Guarda el objeto de obra en la base de datos
    await newAddress.save();

    return res.status(201).json({
      success: true,
      response: newAddress,
      message: "Obra created"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: null,
      message: error.message
    });
  }
};

export default createObraDireccion;