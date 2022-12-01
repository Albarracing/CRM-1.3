//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const SecoModel = db.define('secos',{
    categoria:{type: DataTypes.STRING},
    articulos:{type: DataTypes.STRING},
    cantidad:{type:DataTypes.NUMBER},
    fecha_entrega: {type: DataTypes.DATE}
})

export default SecoModel