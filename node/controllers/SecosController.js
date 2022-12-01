//importo el modelo
import SecoModel from "../models/SecoModel.js";

//metodos del crud

//mostrar todos los articulos
export const getAllSecos = async (req, res) =>{
    try{
        const secos = await SecoModel.findAll()
        res.json(secos)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getSeco = async (req, res) =>{
    try{
        const seco = await SecoModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(seco[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearSeco = async (req, res) => {
    try{
        await SecoModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateSeco = async (req, res) =>{
    try{
        await SecoModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteSeco = async (req, res) =>{
    try{
        await SecoModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}