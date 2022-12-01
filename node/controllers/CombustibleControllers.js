//importo el modelo
import CombustibleModel from "../models/CombustibleModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllCombustibles = async (req, res) =>{
    try{
        const combustibles = await CombustibleModel.findAll()
        res.json(combustibles)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getCombustible = async (req, res) =>{
    try{
        const combustible = await CombustibleModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(combustible[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearCombustible = async (req, res) => {
    try{
        await CombustibleModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateCombustible = async (req, res) =>{
    try{
        await CombustibleModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteCombustible = async (req, res) =>{
    try{
        await CombustibleModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}