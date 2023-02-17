import UsuariosModel from "../../models/modelslogin/LoginModels.js";
import argon2 from "argon2";
import TelefonoModel from "../../models/TelefonoModel.js";


export const Login = async(req, res) =>{
    const user = await UsuariosModel.findOne({
        where:{
            email: req.body.email
        }
    })
    if(!user) return res.status(404).json({msg: 'usuario no encontrado'})
    const match = await argon2.verify(user.contraseña, req.body.contraseña)
    if(!match) return res.status(400).json({msg:'contraseña incorrecta'})
    req.session.userId = user.uuid
    
    const uuid = user.uuid
    const nombre = user.nombre
    const email = user.email
    const role = user.role
    res.status(200).json({uuid, nombre, email, role})
}

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg:'Inicia sesion en tu cuenta'})
    }
    const user = await UsuariosModel.findOne({
        attributes:['uuid', 'nombre', 'email', 'role'],
        where:{
            uuid: req.session.userId
        }
    })
    if(!user) return res.status(404).json({msg: 'usuario no encontrado'})
    res.status(200).json(user)
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg:'no se pudo cerrar la sesion'})
        res.status(200).json({msg:'secion cerrada'})
        })
}