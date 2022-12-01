//importo el modelo
import LogisticaModel from "../models/LogisticaModel.js";

//metodos del crud

//mostrar todos los transporte
export const getAllLogisticas = async (req, res) =>{
    try{
        const logistica = await LogisticaModel.findAll()
        res.json(logistica)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getLogistica = async (req, res) =>{
    try{
        const logistica = await LogisticaModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(logistica[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearLogistica = async (req, res) => {
    try{
        await LogisticaModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateLogistica = async (req, res) =>{
    try{
        await LogisticaModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteLogistica  = async (req, res) =>{
    try{
        await LogisticaModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}