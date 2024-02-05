import express from "express"
import createRampas from "../controllers/rampas/create.js"
import readRampas from "../controllers/rampas/read.js"
import createRampaDireccion from "../controllers/rampas/createDireccionRampa.js"
import getDireccionesRampa from "../controllers/rampas/getDireccionesRampa.js"

const router = express.Router()



router.post("/", createRampas)
router.get("/", readRampas)
router.post("/direcciones", createRampaDireccion)
router.get("/direcciones", getDireccionesRampa)
router.post("/rampassinpago", createRampas)
router.get("rampassinpago", readRampas)

export default router