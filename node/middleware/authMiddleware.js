import UsuariosModel from "../models/modelslogin/LoginModels.js";

export const verifyUser = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg:'Inicia sesion en tu cuenta'})
    }
    const user = await UsuariosModel.findOne({
        where:{
            uuid: req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg: 'usuario no encontrado'})
    req.userId = user.id
    req.role = user.role
    next()
}

export const adminOnly = async (req, res, next) =>{
    const user = await UsuariosModel.findOne({
        where:{
            uuid: req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg: 'usuario no encontrado'})
    if(user.role !== "admin") return res.status(403).json({msg: "solo administradores"})
    next()
}