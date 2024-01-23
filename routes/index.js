import express from 'express';
import RegisterEmpresa from "../routes/RegisterEmpresa.js"
import RegisterVecino from "../routes/RegisterVecino.js"
import login from "../routes/login.js"
import obras from "./obras.js"
import rampas from './rampas.js';
import matches from "./matches.js"
import logout from "./logout.js";
import RegisterAdmin from "./RegisterAdmin.js"
import perfilObra from "./perfilObra.js"
import uploadsImage from "./uploads.js"
import perfilVecino from "./perfilVecino.js"
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
router.use("/signout", logout)
router.use("/registeradmin", RegisterAdmin)
router.use("/perfilobra", perfilObra)
router.use("/subirimagen", uploadsImage)
router.use("/perfilvecino", perfilVecino)



export default router;