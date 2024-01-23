import express from "express"
import createPerfilObra from "../controllers/PerfilObra.js/createPerfilObra.js"
import readPerfilObra from "../controllers/PerfilObra.js/readPerfilObra.js"
import readOnePerfilObra from "../controllers/PerfilObra.js/readOnePerfilObra.js"
import updatePerfilObra from "../controllers/PerfilObra.js/updatePerfilObra.js"
import deletePerfilObra from "../controllers/PerfilObra.js/deletePerfilObra.js"
import validator from "../middlewares/validator.js"
import perfilObraValidator from "../validators/perfilObraValidator.js"
const router = express.Router()

router.post("/", createPerfilObra)
router.get("/", readPerfilObra)
router.get("/:id", readOnePerfilObra)
router.put("/:id",validator(perfilObraValidator) ,updatePerfilObra)
router.delete("/:id", deletePerfilObra)

export default router