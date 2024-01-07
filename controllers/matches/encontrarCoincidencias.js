import axios from "axios";
import Match from "../../models/Match.js";

const calcularDistancia = (coord1, coord2) => {
  const R = 6371; // Radio de la Tierra en kilómetros
  const dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180);
  const dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.latitude * (Math.PI / 180)) *
      Math.cos(coord2.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distancia en kilómetros
  return distance;
};

const encontrarCoincidencias = async (req, res) => {
  try {
    const obrasResponse = await axios.get("https://2lfj6g4k-3000.brs.devtunnels.ms/obras/direcciones");
    const rampasResponse = await axios.get("https://2lfj6g4k-3000.brs.devtunnels.ms/rampas/direcciones");

    const obras = obrasResponse.data.direcciones;
    console.log(obras)
    let rampas = rampasResponse.data.direccion;
    console.log(rampas)

    rampas = rampas.filter((rampa) => {
      let mantenerRampa = false;

      obras.forEach((obra) => {
        const coordsObra = obra.location;
        const coordsRampa = rampa.location;

        const distancia = calcularDistancia(coordsObra, coordsRampa);

        if (distancia <= 5000) {
          mantenerRampa = true;
        }
      });

      return mantenerRampa;
    });

    const matches = [];

    // Utiliza un bucle for...of para poder marcar la función como async
    for (const obra of obras) {
      for (const rampa of rampas) {
        const coordsObra = obra.location;
        const coordsRampa = rampa.location;

        const distancia = calcularDistancia(coordsObra, coordsRampa);

        if (distancia <= 5000) {
          const match = new Match({
            obra: obra._id,
            rampa: rampa._id,
            distancia,
            nombreEmpresa,
            direccion,
            direccionRampas,
            hormigonV
          });

          matches.push(match);
          // Aquí podrías opcionalmente guardar el match en la base de datos si es necesario
          await match.save();  // Utilizar await para esperar a que la operación de guardado se complete
        }
      }
    }

    res.status(200).json({ matches });  // Responder al cliente con los matches encontrados
  } catch (error) {
    console.error('Error al encontrar coincidencias:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export default encontrarCoincidencias;