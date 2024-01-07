import express from "express"
import encontrarCoincidencias from "../controllers/matches/createMatch.js"
import getMatches from "../controllers/matches/getMatches.js"
import validator from "../middlewares/validator.js"
import matchesValidator from "../validators/matchesValidator.js"
import updateMatches from "../controllers/matches/updateMatches.js"
import deleteMatch from "../controllers/matches/deleteMatch.js"
const router = express.Router()

router.post("/", encontrarCoincidencias)
router.get("/", getMatches)
router.put("/:id", validator(matchesValidator), updateMatches)
router.delete("/:id", deleteMatch)

export default router