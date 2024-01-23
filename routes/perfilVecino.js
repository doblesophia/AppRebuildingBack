import express from "express"
import createPerfilVecino from "../controllers/PerfilVecino/createPerfilVecino.js"
import readPerfilVecino from "../controllers/PerfilVecino/readPerfilVecino.js"
import updatePerfilVecino from "../controllers/PerfilVecino/updatePerfilVecino.js"
import validator from "../middlewares/validator.js"
import perfilVecinoValidator from "../validators/perfilVecinoValidator.js"
import deletePerfilVecino from "../controllers/PerfilVecino/deletePerfilVecino.js"
const router = express.Router()

router.post("/", createPerfilVecino)
router.get("/", readPerfilVecino)
router.put("/:id", validator(perfilVecinoValidator), updatePerfilVecino)
router.delete("/:id", deletePerfilVecino)

export default router