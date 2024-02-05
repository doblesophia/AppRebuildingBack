import express from "express"
import Rampa from "../../models/Rampa.js"
import multer from "multer"
import cloudinary from "cloudinary"
import { createWriteStream } from "fs";
import { promisify } from "util";
import stream from "stream";

const router = express.Router()
const pipeline = promisify(stream.pipeline);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


cloudinary.config({
    cloud_name: 'drdwvhrrd',
    api_key: '865977116471173',
    api_secret: 'sFHiK2ylp4qi3D1eS3Ky_d4cqNw',
  });
  

const createRampa = async (req, res) => {
  try {
    
 

    const { direccionRampa, telefono, correo, selectedDate, nombre, observacion, area, unidadVecinal, location:{lat, lng}, comuna, imageUrl } = req.body;

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
      comuna,
     imageUrl
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