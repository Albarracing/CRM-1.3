//importo el modelo
import InformesModel from "../models/InformesModel.js";

//metodos del crud

//mostrar todos los transporte
export const getAllInformes = async (req, res) =>{
    try{
        const informe = await InformesModel.findAll()
        res.json(informe)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getInforme = async (req, res) =>{
    try{
        const informe = await InformesModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(informe[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearInforme = async (req, res) => {
    try{
        await InformesModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateInforme = async (req, res) =>{
    try{
        await InformesModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteInforme  = async (req, res) =>{
    try{
        await InformesModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}