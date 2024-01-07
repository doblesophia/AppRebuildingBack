import express from "express"
import signinController from "../controllers/Login/signin.js"
import accountNotExist from "../middlewares/accountNotExist.js"
import passwordOk from "../middlewares/passwordOk.js"
import generateToken from "../middlewares/generateToken.js"
import validator from "../middlewares/validator.js"
import loginValidator from "../validators/loginValidator.js"
const router = express.Router()

router.post("/", accountNotExist, passwordOk, generateToken, validator(loginValidator) ,signinController)


export default router