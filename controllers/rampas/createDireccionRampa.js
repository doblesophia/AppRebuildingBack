import DireccionRampa from "../../models/DireccionRampa.js";

const createRampaDireccion = async (req, res) => {
  try {
    // Extrae el componente necesario del cuerpo de la solicitud
    const { direccionRampa, location, viewport } = req.body;

    // Crea un objeto de obra con el componente extraído
    const newAddress = new DireccionRampa({
      direccionRampa,
      location,
      viewport
    });

    // Guarda el objeto de obra en la base de datos
    await newAddress.save();

    return res.status(201).json({
      success: true,
      response: newAddress,
      message: "Dirección rampa created"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: null,
      message: error.message
    });
  }
};

export default createRampaDireccion;