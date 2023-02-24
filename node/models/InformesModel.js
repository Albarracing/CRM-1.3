//importo la conexion a la db
import db from '../database/db.js'
//importo sequelize
import { DataTypes } from 'sequelize'
import UsuariosModel from './modelslogin/LoginModels.js'

const InformesModel = db.define('informes',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
            }
        },
        userId:{type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
              notEmpty: true
            }  
          },
    fecha: {type:DataTypes.DATE},
    nomre_int: {type: DataTypes.STRING},
    intendencia: {type: DataTypes.STRING},
    cant_estadias:{type:DataTypes.INTEGER},
    cant_km:{type:DataTypes.INTEGER},
    fac_extra: {type: DataTypes.BOOLEAN},
    desc_fec_extra: {type: DataTypes.STRING},
    bidones_util :{type:DataTypes.INTEGER},
    bidones_recar :{type:DataTypes.INTEGER},
    bidones_nuevos :{type:DataTypes.INTEGER},
    bidones_trafic :{type:DataTypes.INTEGER},
    bidones_dispencer :{type:DataTypes.INTEGER},
    bolsa_hielo:{type:DataTypes.INTEGER},
    hielo_trafic :{type:DataTypes.INTEGER},
    observaciones: {type: DataTypes.STRING},
    semillero_hielo: {type: DataTypes.STRING},
    agua_complejo:{type: DataTypes.STRING},
    hielo_complejo:{type: DataTypes.STRING},
    fecha_estadia:{type:DataTypes.DATE},
    cantidad_changos:{type:DataTypes.INTEGER},
    cant_almuerzo_changos:{type:DataTypes.INTEGER},
    cant_cena_changos:{type:DataTypes.INTEGER},
    ingreso_changos:{type:DataTypes.DATE},
    ingreso_changos_hora:{type:DataTypes.TIME},
    salida_changos:{type:DataTypes.DATE},
    cantidad_chofer:{type:DataTypes.INTEGER},
    cantidad_almuerzo_chofer:{type:DataTypes.INTEGER},
    cantidad_cena_chofer:{type:DataTypes.INTEGER},
    ingreso_chofer:{type:DataTypes.DATE},
    ingreso_chofer_hora:{type:DataTypes.TIME},
    salida_chofer:{type:DataTypes.DATE},
    salida_chofer_hora:{type:DataTypes.TIME},
    cant_estadia_cober_prop:{type:DataTypes.INTEGER},
    cant_almuer_estadia_cober_prop:{type:DataTypes.INTEGER},
    cant_cena_estadia_cober_prop:{type:DataTypes.INTEGER},
    ingre_estadia_cober_prop:{type:DataTypes.DATE},
    ingre_hora_estadia_cober_prop:{type:DataTypes.TIME},
    sali_estadia_cober_prop:{type:DataTypes.DATE},
    sali_hora_estadia_cober_prop:{type:DataTypes.TIME},
    chango_por_llegar_dia:{type:DataTypes.DATE},
    chango_por_llegar_hora:{type:DataTypes.TIME},
    chango_por_salir_cant:{type:DataTypes.INTEGER},
})
UsuariosModel.hasMany(InformesModel)
InformesModel.belongsTo(UsuariosModel, {foreignKey: 'userId'})
export default InformesModel