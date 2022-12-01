//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const CombustibleModel = db.define('combustibles',{

vehiculo:{type: DataTypes.STRING},
tipo_combustible :{type: DataTypes.STRING}, 
cantidad :{type: DataTypes.STRING},
comprobante :{type: DataTypes.STRING},
importe:{type: DataTypes.NUMBER},
tipo_pago:{type: DataTypes.STRING}
})

export default CombustibleModel