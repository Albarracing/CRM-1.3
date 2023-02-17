import TelefonoModel from "../../models/TelefonoModel.js";
import UsuariosModel from "../../models/modelslogin/LoginModels.js";
import {Op} from "sequelize";


//--------revivar quien puede actualizar y elimar productos

export const getProducts = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await TelefonoModel.findAll({
                attributes:['uuid','nombre','importe','empresa_tel','numero_linea','tipo_de_pago','id'],
                include:[{
                    model: UsuariosModel,
                    attributes:['nombre','email']
                }]
            });
        }else{
            response = await TelefonoModel.findAll({
                attributes:['uuid','nombre','importe','empresa_tel','numero_linea','tipo_de_pago','id'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: UsuariosModel,
                    attributes:['nombre','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async(req, res) =>{
    try {
        const product = await TelefonoModel.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await TelefonoModel.findOne({
                attributes:['uuid','nombre','importe','empresa_tel','numero_linea','tipo_de_pago'],
                where:{
                    id: product.id
                },
                include:[{
                    model: UsuariosModel,
                    attributes:['nombre','email']
                }]
            });
        }else{
            response = await TelefonoModel.findOne({
                attributes:['uuid','nombre','importe','empresa_tel','numero_linea','tipo_de_pago'],
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                },
                include:[{
                    model: UsuariosModel,
                    attributes:['nombre','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProduct = async(req, res) =>{
    const {nombre, importe,empresa_tel, numero_linea, tipo_de_pago} = req.body;
    try {
        await TelefonoModel.create({
            nombre: nombre,
            importe: importe,
            empresa_tel:empresa_tel,
            numero_linea:numero_linea,
            tipo_de_pago:tipo_de_pago,
            userId: req.userId
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = async(req, res) =>{
    try {
        const product = await TelefonoModel.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nombre, importe,empresa_tel, numero_linea, tipo_de_pago} = req.body;
        if(req.role === "admin"){
            await TelefonoModel.update({nombre, importe, empresa_tel, numero_linea, tipo_de_pago},{
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
            await TelefonoModel.update({nombre, importe,empresa_tel, numero_linea, tipo_de_pago},{
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProduct = async(req, res) =>{
    try {
        const product = await TelefonoModel.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nombre, importe,empresa_tel, numero_linea, tipo_de_pago} = req.body;
        if(req.role === "admin"){
            await TelefonoModel.destroy({
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
            await TelefonoModel.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}