//importo el modelo
import TransporteModel from "../models/TransporteModel.js";

//metodos del crud

//mostrar todos los transporte
export const getAllTransportes = async (req, res) =>{
    try{
        const transporte = await TransporteModel.findAll()
        res.json(transporte)
    } catch (error){
        res.json({message: error.message})
    }
}

//mostrar un articulo
export const getTransporte = async (req, res) =>{
    try{
        const transporte = await TransporteModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(transporte[0])
    } catch (error){
        res.json({message: error.message})
    }
}

//crear un pedido
export const crearTransporte = async (req, res) => {
    try{
        await TransporteModel.create(req.body)
        res.json({"message":"Pedido creado correctamente"})
    } catch(error){
        res.json({message: error.message})
    }
}

//actualizar un pedido
export const updateTransporte = async (req, res) =>{
    try{
        await TransporteModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({"message":"PEdido actualizado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}

//eliminar un pedido
export const deleteTransporte = async (req, res) =>{
    try{
        await TransporteModel.destroy({
            where:{id: req.params.id}
        })
        res.json({"message":"Pedido eliminado correctamente"})
    } catch (error){
        res.json({message: error.message})
    }
}