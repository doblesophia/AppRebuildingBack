import express from "express"
import multer from "multer"
import cloudinary from "cloudinary"
import PerfilObra from "../models/PerfilObra.js";
import { createWriteStream } from "fs";
import { promisify } from "util";
import stream from "stream";
import readPerfilObra from "../controllers/PerfilObra.js/readPerfilObra.js";

const router = express.Router()
const pipeline = promisify(stream.pipeline);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


cloudinary.config({
    cloud_name: 'drdwvhrrd',
    api_key: '865977116471173',
    api_secret: 'sFHiK2ylp4qi3D1eS3Ky_d4cqNw',
  });
  
  router.post("/", async (req, res) => {
    try {
      const imageUrl = req.body.imageUrl; 
  
      
      const newPerfilObra = new PerfilObra({
        unidadVecinal: req.body.unidadVecinal,
        rampas: req.body.rampas,
        personas: req.body.personas,
        hormigonV: req.body.hormigonV,
        nombreEmpresa: req.body.nombreEmpresa,
        direccion: req.body.direccion,
        tipoDeConstruccion: req.body.tipoDeConstruccion,
        rubroConstruccion: req.body.rubroConstruccion,
        img: imageUrl,
      });
  
      
      await newPerfilObra.save();
  
      
      return res.status(201).json({
        success: true,
        response: newPerfilObra,
        message: "Perfil obra created",
      });
    } catch (error) {
      console.error('Error al crear el perfil de obra:', error);
      res.status(500).json({
        success: false,
        response: null,
        message: `Error interno del servidor: ${error.message}`,
      });
    }
  });

  router.get("/", readPerfilObra)

  export default router