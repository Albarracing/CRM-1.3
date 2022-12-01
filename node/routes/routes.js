import express from "express";
import { crearTransporte, deleteTransporte, getTransporte, getAllTransportes, updateTransporte } from "../controllers/TransporteControllers.js";

const router = express.Router()

router.get('/', getAllTransportes)
router.get('/:id', getTransporte)
router.post('/', crearTransporte)
router.put('/:id', updateTransporte)
router.delete('/:id', deleteTransporte)

export default router