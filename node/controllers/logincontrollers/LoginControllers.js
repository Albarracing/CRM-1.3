import UsuariosModel from "../../models/modelslogin/LoginModels.js"
import generarJWT from "../../helpers/generarJWT.js"
import bcrypt, { hash } from 'bcrypt'
import db from "../../database/db.js"

// const registrar = async (req, res) =>{
// const email = req.body.email;
// const hashedPassword = await bcrypt.hash(req.body.contraseña,10);
// db.get( async (err, connection) => {
//  if (err) throw (err)
//  const sqlSearch = "SELECT * FROM usuarios WHERE email = ?"
//  const search_query = mysql.format(sqlSearch,[email])
//  const sqlInsert = "INSERT INTO usuarios VALUES (0,?,?)"
//  const insert_query = mysql.format(sqlInsert,[email, hashedPassword])
//  // ? will be replaced by values
//  // ?? will be replaced by string
//  await connection.query (search_query, async (err, result) => {
//   if (err) throw (err)
//   console.log("------> Search Results")
//   console.log(result.length)
//   if (result.length != 0) {
//    connection.release()
//    console.log("------> User already exists")
//    res.sendStatus(409) 
//   } 
//   else {
//    await connection.query (insert_query, (err, result)=> {
//    connection.release()
//    if (err) throw (err)
//    console.log ("--------> Created new User")
//    console.log(result.insertId)
//    res.sendStatus(201)
//   })
//  }
// })
// })
//  }






//--------------REGISTRAR---------------
const registrar = async (req, res) =>{
    const email  = req.body.email
    const contraseña = req.body.contraseña
    // const contraseñahas = await bcrypt.hash(contraseña, 10);
    // db.query('INSERT INTO usuarios SET ?', {email:email, contraseña:contraseñahas}, async(error, result)=>{
    //     if(error){
    //         console.log(error)
    //     }else{
    //         res.send('alta exitosa')
    //     }
    // })


    const existeUsuario = await UsuariosModel.findOne({ 
        where: { email:email}})
 
    if(existeUsuario){
        const error = new Error('Usuario ya registrado')
        return res.status(400).json({msg: error.message})
    }
    try{
        const usuario = new UsuariosModel(req.body)
        const usuarioGuardado = await usuario.save()
        res.json({usuarioGuardado})
    }catch (error){
        console.log(error)
    }

}
// const perfil = (req, res) =>{
//     res.json({msg:'mostrando perfil'})
// }
//------------------HASTA ACA--------------



// const confirmar = async (req, res ) =>{
//     const {token} = req.params
//     const usuarioConfirmar = await UsuariosModel.findOne({token})
//     if(!usuarioConfirmar){
//         const error = new Error('Token invalido')
//         return res.status(404).json({msg: error.message})
//     }

//     try{
//         usuarioConfirmar.token = null
//         usuarioConfirmar.confirmado = true
//         await usuarioConfirmar.save()
//         res.json({msg: 'usuario confirmando correctamente'})

//     }catch (error){
//         console.log(error)
//     }
// }

// const autenticar = async (req, res) =>  {
// 	var email = req.body.email;
// 	var contraseña = req.body.contraseña;
	
        
// }
    

//-----aca empieza-----
const autenticar = async (req, res) => {
   const { email } = req.body
   const {contraseña} = req.body
    const usuarioAuntenticar = await UsuariosModel.findAll({ 
        where: { email:email, contraseña:contraseña}})
    if(!usuarioAuntenticar) {
     const error = new Error('el usuario no existe')
     return res.status(404).json({msg: error.message})
    }

    
    
    // if(!usuarioAuntenticar.confirmado){
    //     const error = new Error('tu cuenta no a sido confirmada')
    //     return res.status(403).json({msg: error.message})
    // }

    // if(await usuarioAuntenticar(contraseña)){
    //     res.json({token: generarJWT()})
    // }else{
    //     const error = new Error('la contraseña es incorrecta')
    //     return res.status(403).json({msg:error.message})
    // }
}


export{
    registrar,
    //perfil,
   // confirmar,
    autenticar
}