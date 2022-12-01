//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const TelefonoModel = db.define('telefonos',{
    nombre:{type: DataTypes.STRING},
    empresa_tel :{type: DataTypes.STRING},
    numero_linea :{type: DataTypes.NUMBER},
    importe :{type: DataTypes.NUMBER},
    tipo_de_pago :{type: DataTypes.STRING},
    createdAt :{type: DataTypes.DATE},
    updatedAt:{type: DataTypes.DATE}
    
})

export default TelefonoModel