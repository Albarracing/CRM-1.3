//importo el modelo
import FrescosModel from "../models/FrescosModel.js";

//metodos del crud

//mostrar todos los transporte
export const getAllFrescos = async (req, res) =>{
    try{
        const fresco = await FrescosModel.findAll()
        res.json(fresco)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getFresco = async (req, res) =>{
    try{
        const fresco = await FrescosModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(fresco[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearFresco = async (req, res) => {
    try{
        await FrescosModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateFresco = async (req, res) =>{
    try{
        await FrescosModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteFresco  = async (req, res) =>{
    try{
        await FrescosModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}