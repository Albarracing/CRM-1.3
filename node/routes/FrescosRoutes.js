import express from "express";
import { crearFresco, deleteFresco, getFresco, getAllFrescos, updateFresco } from "../controllers/FrescosController.js";

const frescosrouter = express.Router()

frescosrouter.get('/', getAllFrescos)
frescosrouter.get('/:id', getFresco)
frescosrouter.post('/', crearFresco)
frescosrouter.put('/:id', updateFresco)
frescosrouter.delete('/:id', deleteFresco)

export default frescosrouter