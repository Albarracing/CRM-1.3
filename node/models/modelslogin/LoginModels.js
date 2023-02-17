//importo la conexion a la db
import db from '../../database/db.js'
//importo sequelize
import {Sequelize} from 'sequelize'
//import {  } from 'sequelize'
import bcrypt, { hash } from 'bcrypt'
import generartoken from '../../helpers/generartoken.js'

const {DataTypes} = Sequelize

const UsuariosModel = db.define('usuarios',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },

    contraseña:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            isEmail: true
        }
    },

    role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },

    // telefono:{
    //     type:DataTypes.NUMBER, 
    //     default:null,
    //     trim:true
    // },
    // token:{
    //     type:DataTypes.STRING,
    //     default: generartoken()
    // },
    // confirmado:{
    //     type:DataTypes.BOOLEAN,
    //     default:false
    // }

},{
    freezeTableName:true

})

// UsuariosModel.beforeSave('seve', function(next) {
//     const usuario = this
//     if(!usuario.isModified('contraseña')){
//         return next()
//     }
//     bcrypt.genSalt(10, (err, salt) =>{
//         if(err){
//             next(err)
//         }
//         bcrypt.hash(usuario.contraseña, salt, null, (err, hash) =>{
//             if(err){
//                 next(err)
//             }
//         usuario.contraseña = hash
//         next()
//         })
//     })
// })

// UsuariosModel.methods.compararPassword = function(contraseña, cb) {
//     bcrypt.compare(contraseña, this.contraseña, (err, sonIguales) => {
//         if(err){
//             return cb(err)
//         }
//         cb(null, sonIguales)
//     })
// }
//      const salt = await bcrypt.genSalt(10)
//      this.contraseña = await bcrypt.hash(this.contraseña, salt)
//  }


export default UsuariosModel