import Rampa from "../../models/Rampa.js"

const createRampa = async (req, res) => {
  try {
    // Obtener los datos necesarios de la solicitud (req.body, req.params, etc.)
    const { direccionRampa, telefono, correo, selectedDate, nombre, observacion, area, unidadVecinal, location:{lat, lng}, comuna } = req.body;

    // Crear una nueva instancia de la obra con los datos proporcionados
    const newRampa = new Rampa({
      direccionRampa,
      nombre,
      telefono,
      correo,
      selectedDate,
      observacion,
      area,
      unidadVecinal, 
      location:{
        lat,
        lng
      },
      comuna
    });

    // Guardar la nueva obra en la base de datos
    const savedRampa = await newRampa.save();
    console.log(savedRampa)

    return res.status(201).json({
      success: true,
      response: savedRampa,
      message: "rampa created",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};

export default createRampa;