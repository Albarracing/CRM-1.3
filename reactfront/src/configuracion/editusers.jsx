import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Editusers = () =>{
 

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confContraseña, setConfcontraseña] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const {id} = useParams()
    const navigate = useNavigate();


 useEffect(() => {
      const getUserById = async () => {
        try {
          const response = await axios.get(`http://localhost:9000/users/${id}`);
          setNombre(response.data.nombre);
          setEmail(response.data.email);
          setRole(response.data.role);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getUserById();
    }, [id]);
    
    const updateUser = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:9000/users/${id}`, {
          nombre: nombre,
          email: email,
          contraseña: contraseña,
          confContraseña: confContraseña,
          role: role,
        });
        navigate("/users");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };

    return (
        <div>
             <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confContraseña}
                    onChange={(e) => setConfcontraseña(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="btn btn-success">
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
      )

}

    export default Editusers































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