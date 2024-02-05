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
import perfilVecino from "./perfilVecino.js"
import subirimagen from "./subirimagen.js"
const router = express.Router();

/* GET home page. */


router.use("/registerempresa", RegisterEmpresa)
router.use("/registervecino", RegisterVecino)
router.use("/login", login)
router.use("/obras", obras)
router.use("/rampas", rampas)
router.use("/matches", matches)
router.use("/signout", logout)
router.use("/registeradmin", RegisterAdmin)
router.use("/perfilobra", perfilObra)
router.use("/perfilvecino", perfilVecino)
router.use("/subirfoto", subirimagen)



export default router;