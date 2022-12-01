//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'

const TransporteModel = db.define('transportes',{
    //id:{type: DataTypes.NUMBER},
    descripcion:{type: DataTypes.STRING},
    marca:{type:DataTypes.STRING},
    modelo: {type: DataTypes.STRING},
    patente: {type: DataTypes.STRING},
    patente_acop:{type: DataTypes.STRING},
    carga_max:{type: DataTypes.NUMBER}, 
    ven_seguro:{type: DataTypes.DATE},
    ven_patente:{type: DataTypes.DATE},
    ven_armat:{type: DataTypes.DATE},
    ven_vtv:{type: DataTypes.DATE},
    
    //anular:{type: DataTypes.BOOLEAN}

    //frescos

    // categoria:{type: DataTypes.STRING},
    // articulos:{type: DataTypes.STRING},
    // cantidad:{type:DataTypes.NUMBER},
    // fecha_entrega:{type:DataTypes.DATE},
})

export default TransporteModel