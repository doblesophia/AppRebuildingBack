import createError from'http-errors';
import express from'express';
import path from'path';
import multer from "multer"
import cookieParser from'cookie-parser';
import logger from'morgan';
import cors from "cors"
import indexRouter from'./routes/index.js';
import usersRouter from'./routes/users.js';
import { __dirname } from './utils.js';
import passport from 'passport';
import 'dotenv/config.js'
import "./config/database.js"


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 const storage = multer.diskStorage({
   destination: path.join(__dirname, 'public/uploads'),
   filename: (req,file, cb) => {
     cb(null, new Date().getTime() * path.extname(file.originalname))
   }
 })
 app.use(multer(storage).single('archivo'))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cors());

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

export default app;
