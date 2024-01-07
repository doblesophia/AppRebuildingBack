import express from "express"
import readVecino from "../controllers/RegisterVecino/read.js"
import createVecino from "../controllers/RegisterVecino/create.js";
import updateVecino from "../controllers/RegisterVecino/update.js";
import validator from "../middlewares/validator.js"
import registerVecinoValidator from "../validators/registerVecinoValidator.js";
import deleteVecino from "../controllers/RegisterVecino/delete.js"
import findEmail from "../middlewares/findEmail.js";
import hasheadorPassword from "../middlewares/hasheadorPassword.js";

const router = express.Router();

router.get("/", readVecino)
router.post("/", findEmail, validator(registerVecinoValidator), hasheadorPassword, createVecino)
router.put("/:id", validator(registerVecinoValidator) ,updateVecino)
router.delete("/:id", deleteVecino)

export default router