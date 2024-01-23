import express from "express"
import signout from "../controllers/Signout/signout.js"
import passport from "../middlewares/passport.js"

const router = express.Router()


router.post("/", passport.authenticate('jwt', { session: false }), signout )

export default router