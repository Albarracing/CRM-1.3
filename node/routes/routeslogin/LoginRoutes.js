import express from 'express'
import {autenticar,  registrar} from '../../controllers/logincontrollers/LoginControllers.js'
//import controlador from '../../controllers/logincontrollers/controlador.js'
//import controlador from '../../controllers/logincontrollers/controlador.js'
//import respuestas from '../../red/respuestas.js'
import checkAuth from '../../middleware/authMiddleware.js'
const router = express.Router()

// router.get('/', function (req, res){
//     const todos = controlador.todos()
//     res.send(todos)
// })


//router.post('/registrar', registrar)
//router.get('/confirmar/:token', confirmar)
//router.post('/autenticar', autenticar)
//router.get('/perfil', checkAuth , perfil)
export default router