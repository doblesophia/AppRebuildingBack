import express from 'express';
import RegisterEmpresa from "../routes/RegisterEmpresa.js"
import RegisterVecino from "../routes/RegisterVecino.js"
import login from "../routes/login.js"
import obras from "./obras.js"
import rampas from './rampas.js';
import matches from "./matches.js"
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.use("/registerempresa", RegisterEmpresa)
router.use("/registervecino", RegisterVecino)
router.use("/login", login)
router.use("/obras", obras)
router.use("/rampas", rampas)
router.use("/matches", matches)


export default router;