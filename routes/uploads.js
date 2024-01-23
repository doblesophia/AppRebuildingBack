import express from "express"
import Router from 'express';
import {check} from 'express-validator';
import multer from 'multer';
import path from 'path'
import { __dirname } from '../utils.js';
import { validarCampos } from '../middlewares/validarCampos.js';
// import { validarArchivoSubir } from '../middlewares/validarArchivoSubir.js';
import { cargarArchivo, mostrarImagen, actualizarImagenCloudinary } from '../controllers/imagenes/uploadImages.js';
import { coleccionesPermitidas } from '../helpers/coleccionesPermitidas.js';

const app = express()
const router = Router();


const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req,file, cb) => {
      cb(null, new Date().getTime() * path.extname(file.originalname))
    }
  })
  app.use(multer(storage).single('archivo'))

  const validarArchivoSubir = (req, res, next ) => {
    console.log('req.files:', req.files)
       // Verifica si hay archivos en la solicitud
       if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        return res.status(400).json({
            msg: 'No hay archivos que subir - validarArchivoSubir'
        });
    }

    // Continúa con el siguiente middleware si hay archivos
    next();}

router.post( '/', validarArchivoSubir, cargarArchivo );

router.put('/:id', [
    validarArchivoSubir,
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
    validarCampos
], actualizarImagenCloudinary )
// ], actualizarImagen )

router.get('/:id', [
    check('id','El id debe de ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
    validarCampos
], mostrarImagen  )



export default router;