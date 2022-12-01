//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const UsuarioModel = db.define('usuarios',{
    //id:{type: DataTypes.NUMBER},
    usuario:{type: DataTypes.STRING},
    contraseña:{type:DataTypes.STRING},


})

export default UsuarioModel









{/*const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'usuarios',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        contraseña: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)*/}