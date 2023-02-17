//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
//import { DataTypes } from 'sequelize'
import {Sequelize} from 'sequelize'
import UsuariosModel from './modelslogin/LoginModels.js'

const {DataTypes} = Sequelize

const TelefonoModel = db.define('telefonos',{
  
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
            }
        },
    nombre:{type: DataTypes.STRING},
    empresa_tel :{type: DataTypes.STRING},
    numero_linea :{type: DataTypes.INTEGER},
    importe :{type: DataTypes.INTEGER},
    tipo_de_pago :{type: DataTypes.STRING},
    
    userId:{type: DataTypes.INTEGER,
          allowNull: false,
          validate:{
            notEmpty: true
          }  
        },
    createdAt :{type: DataTypes.DATE},
    updatedAt:{type: DataTypes.DATE}
    
    },{
        freezeTableName:true
})

UsuariosModel.hasMany(TelefonoModel)
TelefonoModel.belongsTo(UsuariosModel, {foreignKey: 'userId'})

export default TelefonoModel