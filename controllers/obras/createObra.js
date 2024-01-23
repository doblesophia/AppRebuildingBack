import Obra from "../../models/Obra.js";

const createObra = async (req, res) => {
  try {
    // Obtener los datos necesarios de la solicitud (req.body, req.params, etc.)
    const { direccion, nombreEmpresa, telefono, correo, observacion, hormigonV, maderaV, selectedDate, location:{lat, lng}, unidadVecinal, personas, tipoDeConstruccion, rubroConstruccion } = req.body;

    // Crear una nueva instancia de la obra con los datos proporcionados
    const newObra = new Obra({
      direccion,
      nombreEmpresa,
      telefono,
      correo,
      observacion,
      hormigonV,
      maderaV,
      selectedDate,
      location:{
        lat,
        lng
      },
      unidadVecinal,
      personas,
      tipoDeConstruccion,
      rubroConstruccion
    });

    // Guardar la nueva obra en la base de datos
    const savedObra = await newObra.save();

    return res.status(201).json({
      success: true,
      response: savedObra,
      message: "Obra created",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
};

export default createObra;