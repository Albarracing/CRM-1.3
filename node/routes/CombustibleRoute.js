import express from "express";
import { crearCombustible, deleteCombustible, getCombustible, getAllCombustibles, updateCombustible } from "../controllers/CombustibleControllers.js";

const combustiblerouter = express.Router()

combustiblerouter.get('/', getAllCombustibles)
combustiblerouter.get('/:id', getCombustible)
combustiblerouter.post('/', crearCombustible)
combustiblerouter.put('/:id', updateCombustible)
combustiblerouter.delete('/:id', deleteCombustible)

export default combustiblerouter