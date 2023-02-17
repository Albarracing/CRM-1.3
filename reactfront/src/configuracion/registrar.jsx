// import React, {form} from "react";
// import { useState } from "react";
// import Alerta from "../components/alerta";
// import axios from "axios";
// const Register = () => {
//     const [nombre, setNombre] = useState('')
//     const [usuario, setUsuario] = useState('')
//     const [email, setEmail] = useState('')
//     const [contraseña, setContraseña] = useState('')
//     const [repetircontraseña, setRepetircontraseña] = useState('')
//     const [telefono, setTelefono] = useState('')
//     const [apellido, setApellido] = useState('')
//     const [alerta, setAlerta] = useState({})

//     const handleSubmit = async e =>{
//         e.preventDefault()
        
//         if([nombre, usuario, email, contraseña, repetircontraseña, telefono, apellido ].includes('')){
//             setAlerta({msg:'hay campos vacios', error: true})
//             return
//         }
//         if(contraseña !== repetircontraseña){
//             setAlerta({msg:'los password son distintos', error: true})
//             return
//         }
//         if(contraseña.length < 6){
//             setAlerta({msg:'el pasword es muy corto, agrega minimo 6 caracteres', error: true})
//             return
//         }
//         setAlerta({})

//         try{
//             const url="http://localhost:9000/login/"
//             const respuesta = await axios.post(url, {nombre, usuario, contraseña, email, apellido, telefono, repetircontraseña})
//             setAlerta({
//                 msg:'Creado correctamente',
//                 error:false
//             })
//         } catch(error){
//             setAlerta({
//                 msg: error.response.data.msg,
//                 error: true
//             })
//         }
//     }

//     const {msg} = alerta
//       return(
    
//     <div className="mt-20 md:mt-5 shadow-lg px-10 rounded-xl bg-white">
//     {msg && <Alerta
//         alerta={alerta}
//     />}
//     <form onSubmit={handleSubmit}>
//         <div className="my-5">
//     <div className="usuarios">   
//         {/* <lavel className="uppercase text-gray-600 block text-xl font-bold">Usuarios</lavel> */}
//           <input type="text"   placeholder='Usuario' name="usuario" id="usuario" 
//           className="usua form-control"
//           onChange={e => setUsuario(e.target.value)} value={usuario}/>
          
//           <input type="Password"  className="pass form-control" placeholder='Contraseña' name="contraseña" id="contraseña" onChange={e => setContraseña(e.target.value)} value={contraseña}/>
//           <input type="Password"  className="pass form-control" placeholder='Repetir contraseña' name="contraseña" id="contraseña" onChange={e => setRepetircontraseña(e.target.value)} value={repetircontraseña}/>
//           </div>
//           <div className="nombreape">
//           <input type="text"  className="usu form-control" placeholder='Nombre' name="nombre" id="nombre" 
//           onChange={e => setNombre(e.target.value)} value={nombre}/>
//           <input type="text"  className="usu form-control" placeholder='Apellido' name="apellido" id="apellido" onChange={e => setApellido(e.target.value)} value={apellido}/>
//           </div>
             
//           <div className="celemail">
//           <input type="text" className="usu form-control" placeholder="Número de Celular" name="telefono" id="telefono" onChange={e => setTelefono(e.target.value)} value={telefono}/>
//           <input type="text" className="usu form-control" placeholder="Email" name="email" id="email" 
//           onChange={e => setEmail(e.target.value)} value={email}/>
//           <div>
//           <input 
//           type='submit' 
//           value='Crear cuenta'
//           className="bg-indigo-700 w-full py-2 px-1 rounded-xl text-white uppercase font-bold mt-0 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"/>
//           </div>
       
          
//     </div>
//     </div>
//     </form>    
//     </div>
//       )
// }

// export default Register