import express from "express";
import { crearLogistica, deleteLogistica, getLogistica, getAllLogisticas, updateLogistica } from "../controllers/LogisticaController.js";

const logisticarouter = express.Router()

logisticarouter.get('/', getAllLogisticas)
logisticarouter.get('/:id', getLogistica)
logisticarouter.post('/', crearLogistica)
logisticarouter.put('/:id', updateLogistica)
logisticarouter.delete('/:id', deleteLogistica)

export default logisticarouter