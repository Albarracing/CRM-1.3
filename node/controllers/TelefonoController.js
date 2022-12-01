//importo el modelo
import TelefonoModel from "../models/TelefonoModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllTelefonos = async (req, res) =>{
    try{
        const telefonos = await TelefonoModel.findAll()
        res.json(telefonos)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getTelefono = async (req, res) =>{
    try{
        const telefono = await TelefonoModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(telefono[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearTelefono = async (req, res) => {
    try{
        await TelefonoModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateTelefono = async (req, res) =>{
    try{
        await TelefonoModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteTelefono = async (req, res) =>{
    try{
        await TelefonoModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}