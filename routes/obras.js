import express from "express"
import createObra from "../controllers/obras/createObra.js"
import readObra from "../controllers/obras/readObra.js"
import updateObra from "../controllers/obras/updateObra.js"
import validator from "../middlewares/validator.js"
import readOneObra from "../controllers/obras/readOneObra.js"
//import obrasValidator from "../validators/obrasValidator.js"
import createObraDireccion from "../controllers/obras/createDireccion.js"
import getObraDireccion from "../controllers/obras/readDireccion.js"
import getDireccionById from "../controllers/obras/readOneDireccion.js"
const router = express.Router()

router.post("/", createObra)
router.get("/", readObra)
router.get("/:id", readOneObra)
router.post("/direcciones", createObraDireccion )
router.get("/direcciones", getObraDireccion )
router.get("/direcciones/:id", getDireccionById)
// router.put("/:id", validator(obrasValidator) ,updateObra)

export default router