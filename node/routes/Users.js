import { Router } from 'express'
import { methods as userController } from '../controllers/UserControllers'


const router = Router()

router.get('/', userController.getUsers)
router.post('/', userController.addUser)
router.post('/user', userController.getUser)

export default router








{/*const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/config', (req, res) =>{
    const today = new Date()
    const userData = {
        usuario: req.body.usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contraseña: req.body.contraseña,
        telefono: req.body.telefono,
        puesto: req.body.puesto,
        ubicacion: req.body.ubicacion,
        tip_usuario: req.body.tip_usuario,
        created: today
    }

    User.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.contraseña, 10, (err, hash) => {
                userData.contraseña = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.usuario + ' registered'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }
        else {
            res.json({ error: user.usuario + " User already exist"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post('/login',(req, res) => {
    User.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    .then(user =>{
        if(user) {
            if (bcrypt.compareSync(req.body.contraseña, user.contraseña)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.send(token)
            }
            
        }
        else {
            res.status(400).json({ error: " User does not exist"})
        }
    })
    .catch(err => {
        res.status(400),json({ error: err})
    })
})

module.exports = users
*/}