import express from "express";
import { crearTelefono, deleteTelefono, getTelefono, getAllTelefonos, updateTelefono } from "../controllers/TelefonoController.js";

const telefonorouter = express.Router()

telefonorouter.get('/', getAllTelefonos)
telefonorouter.get('/:id', getTelefono)
telefonorouter.post('/', crearTelefono)
telefonorouter.put('/:id', updateTelefono)
telefonorouter.delete('/:id', deleteTelefono)

export default telefonorouter