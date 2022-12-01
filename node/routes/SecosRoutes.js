import express from "express";
import { crearSeco, deleteSeco, getSeco, getAllSecos, updateSeco } from "../controllers/SecosController.js";

const secosrouter = express.Router()

secosrouter.get('/', getAllSecos)
secosrouter.get('/:id', getSeco)
secosrouter.post('/', crearSeco)
secosrouter.put('/:id', updateSeco)
secosrouter.delete('/:id', deleteSeco)

export default secosrouter