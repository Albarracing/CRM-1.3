import express from 'express'
import {
        getUser,
        getUserById,
        createUser,
        updateUser, 
        deleteUser
    } from '../../controllers/logincontrollers/LoginControllers.js'

import {verifyUser, adminOnly} from '../../middleware/authMiddleware.js'
//import controlador from '../../controllers/logincontrollers/controlador.js'
//import controlador from '../../controllers/logincontrollers/controlador.js'
//import respuestas from '../../red/respuestas.js'
//import checkAuth from '../../middleware/authMiddleware.js'
const router = express.Router()

router.get('/users',verifyUser,adminOnly, getUser)
router.get('/users/:id',verifyUser,adminOnly, getUserById)
router.post('/users',verifyUser,adminOnly, createUser)
router.patch('/users/:id',verifyUser,adminOnly, updateUser)
router.delete('/users/:id',verifyUser,adminOnly, deleteUser)


export default router