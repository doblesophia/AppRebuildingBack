import express from "express"
import readEmpresa from "../controllers/RegisterEmpresa/read.js"
import createEmpresa from "../controllers/RegisterEmpresa/create.js";
import updateEmpresa from "../controllers/RegisterEmpresa/update.js";
import validator from "../middlewares/validator.js"
import registerEmpresaValidator from "../validators/registerEmpresaValidator.js";
import deleteEmpresa from "../controllers/RegisterEmpresa/delete.js"
import findEmail from "../middlewares/findEmail.js";
import hasheadorPassword from "../middlewares/hasheadorPassword.js";
import readOne from "../controllers/RegisterEmpresa/readOne.js";
const router = express.Router();

router.get("/", readEmpresa)
router.get("/:id", readOne)
router.post("/", findEmail, validator(registerEmpresaValidator),hasheadorPassword, createEmpresa)
router.put("/:id", validator(registerEmpresaValidator) ,updateEmpresa)
router.delete("/:id", deleteEmpresa)

export default router