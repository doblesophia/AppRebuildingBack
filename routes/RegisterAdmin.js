
import express from "express"
import findEmail from "../middlewares/findEmail.js"
import validator from "../middlewares/validator.js"
import hasheadorPassword from "../middlewares/hasheadorPassword.js"
import createAdmin from "../controllers/RegisterAdmin/createAdmin.js"
import readAdmin from "../controllers/RegisterAdmin/readAdmin.js"
import readOneAdmin from "../controllers/RegisterAdmin/readOneAdmin.js"
import updateAdmin from "../controllers/RegisterAdmin/updateAdmin.js"
import registerAdminValidator from "../validators/registerAdminValidator.js"
import deleteAdmin from "../controllers/RegisterAdmin/deleteAdmin.js"

const router = express.Router()

router.post("/", findEmail, validator(registerAdminValidator), hasheadorPassword, createAdmin)
router.get("/", readAdmin)
router.get("/:id", readOneAdmin)
router.put("/:id", validator(registerAdminValidator), updateAdmin)
router.delete("/:id", deleteAdmin)

export default router