import express from "express";
import { crearInforme, deleteInforme, getInforme, getAllInformes, updateInforme } from "../controllers/InformesController.js";

const informerouter = express.Router()

informerouter.get('/', getAllInformes)
informerouter.get('/:id', getInforme)
informerouter.post('/', crearInforme)
informerouter.put('/:id', updateInforme)
informerouter.delete('/:id', deleteInforme)

export default informerouter