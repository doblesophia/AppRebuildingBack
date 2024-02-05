import createError from'http-errors';
import express from'express';
import path from'path';
import multer from "multer"
import { CloudinaryStorage } from'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary'
import cookieParser from'cookie-parser';
import logger from'morgan';
import cors from "cors"
import indexRouter from'./routes/index.js';
import usersRouter from'./routes/users.js';
import { __dirname } from './utils.js';
import passport from './middlewares/passport.js';
import session from 'express-session';
import Imagen from './models/Imagen.js';
import 'dotenv/config.js'
import "./config/database.js"


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cors());

app.use(session({
  secret: 'hola1234', // Cambia esto a un valor seguro en producción
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


 //catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const parser = multer({ storage: storage });

app.post('/subirimagen', parser.single('imagen'), async (req, res) => {
  console.log('Entró en /subirimagen')
  try {
    const { path, filename } = req.file;
    const result = await cloudinary.uploader.upload(path);

    // Crear una nueva instancia de Imagen (ajusta según tu modelo)
    const nuevaImagen = new Imagen({
      url: result.secure_url,
      public_id: result.public_id,
    });

    // Guardar la información en la base de datos
    await nuevaImagen.save();

    // Enviar la respuesta al cliente
    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la subida de la imagen' });
  }
});


export default app;
