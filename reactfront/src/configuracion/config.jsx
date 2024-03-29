// //import { convertRoutesToDataRoutes } from "@remix-run/router/dist/utils";
//import React, { Component, form } from "react";
//import { Modal, ModalBody } from "reactstrap";
// import Table from 'react-bootstrap/Table';
// import axios from 'axios'
// import Home from '../home/home'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 //import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const URI = 'http://localhost:9000/configuracion/'

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Home from "../home/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
//import { Button, Modal } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './config.css'
import { Table } from "reactstrap";

const Configuracion = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confContraseña, setConfcontraseña] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  
  const { id } = useParams();
//-----modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//---tabla de usuarios
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:9000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:9000/users/${userId}`);
    getUsers();
  };

//--editar usuarios

// useEffect(() => {
//   const getUserById = async () => {
//     try {
//       const response = await axios.get(`http://localhost:9000/users/${id}`);
//       setNombre(response.data.name);
//       setEmail(response.data.email);
//       setRole(response.data.role);
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };
//   getUserById();
// }, [id]);

// const updateUser = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.patch(`http://localhost:9000/users/${id}`, {
//       nombre: nombre,
//       email: email,
//       contraseña: contraseña,
//       confContraseña: confContraseña,
//       role: role,
//     });
//     navigate("/users");
//   } catch (error) {
//     if (error.response) {
//       setMsg(error.response.data.msg);
//     }
//   }
// };

//---crear usuarios
 



  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/users", {
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
       <div className='hometel'>
    <Home/> 
    </div> 
    <div className='cabezeracon'>
    {/* <h1 className="title">Users</h1> */}
      {/* <h2 className="subtitle">Add New User</h2> */}
      <Button className="subtitle" variant="success" onClick={handleShow}>
      <FontAwesomeIcon icon={faPlus}/>
      </Button>
      
      <h5 className='titulocon'>Maestro de usuarios</h5>
    </div>
      {/* <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2> */}
      {/* <Link to="/users/add" className="button is-primary mb-2">
        Add New
      </Link> */}
      <Table striped bordered hover size="sm" className="table">
        <thead>
          <tr className="accionescon">
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td className="auto">{index + 1}</td>
              <td className="auto">{user.nombre}</td>
              <td className="auto">{user.email}</td>
              <td className="auto">{user.role}</td>
              <td className="auto">
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="btn btn-primary is-small is-info"
                >
                  Edit
                </Link>
                <button className="btn btn-danger"
                  onClick={() => deleteUser(user.uuid)}
                  
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      <Modal show={show} onHide={handleClose}>
      <p className="has-text-centered">{msg}</p>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form onSubmit={saveUser} >
        <Modal.Body>
          
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='tit-conf'>Nombre</Form.Label>
              <Form.Control
                 type="text"
                 className="input"
                 value={nombre}
                 onChange={(e) => setNombre(e.target.value)}
                 placeholder="Name"
              />
               <Form.Label className='tit-conf'>Email</Form.Label>
              <Form.Control
                 type="text"
                 className="input"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Email"
              />
               <Form.Label className='tit-conf'>Contraseña</Form.Label>
              <Form.Control
                  type="password"
                  className="input"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  placeholder="******"
              />
               <Form.Label className='tit-conf'>Conf contraseña</Form.Label>
              <Form.Control
                 type="password"
                 className="input"
                 value={confContraseña}
                 onChange={(e) => setConfcontraseña(e.target.value)}
                 placeholder="******"
              />
            </Form.Group>
            <Form.Label className='tit-conf'>Role</Form.Label>
            <Form.Select
                         value={role}
                         onChange={(e) => setRole(e.target.value)}>
                    
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
            </Form.Select>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          
        </Modal.Footer>
        </Form>
      </Modal>






      {/* <div className="card">
        <div className="card-content">
          <div className="content">

            <form className='form-card' onSubmit={saveUser}>
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
                  <button type="submit" className="button is-success">
                    Guardar
                  </button>
                </div>
              </div>
             
            </form>
            
          </div>
        </div>
      </div>
      */}
   

    </div>
  );


// //     state={
// //         data:[],
// //         modalInsertar: false,
// //         modalEliminar: false,
// //         form:{
// //             id:'',
// //             usuario:'',
// //             contraseña:'',
// //             nombre:'',
// //             apellido:'',
// //             telefono:'',
// //             email:'',
// //             puesto:'',
// //             ubicacion:'',
// //             tip_usuario:'',
// //             anular_usuario:'',
            
// //         }
// //     }

// //     peticionGet=()=>{
// //         axios.get(URI).then(response=>{
// //           this.setState({data: response.data});
// //         }).catch(error=>{
// //           console.log(error.message);
// //         })
// //     }

// //     peticionPost=async()=>{
// //         delete this.state.form.id;
// //        await axios.post(URI,this.state.form).then(response=>{
// //           this.modalInsertar();
// //           this.peticionGet();
// //         }).catch(error=>{
// //           console.log(error.message);
// //         })
// //     }
      
// //       peticionPut=()=>{
// //         axios.put(URI+this.state.form.id, this.state.form).then(response=>{
// //           this.modalInsertar();
// //           this.peticionGet();
// //         })
// //     }
      
// //       peticionDelete=()=>{
// //         axios.delete(URI+this.state.form.id).then(response=>{
// //           this.setState({modalEliminar: false});
// //           this.peticionGet();
// //         })
// //     }
// //     modalInsertar=()=>{
// //         this.setState({modalInsertar: !this.state.modalInsertar});
// //       }
// //     seleccionarEmpresa=(transporte)=>{
// //         this.setState({
// //           tipoModal: 'actualizar',
// //           form: {
// //             id: transporte.id,
// //             usuario: transporte.usuario,
// //             contraseña: transporte.contraseña,
// //             nombre: transporte.nombre,
// //             apellido: transporte.apellido,
// //             telefono: transporte.telefono,
// //             email: transporte.email,
// //             puesto: transporte.puesto,
// //             ubicacion: transporte.ubicacion,
// //             tip_usuario: transporte.tip_usuario,
// //             anular_usuario: transporte.anular_usuario,
// //         }
// //     })
// //   }
// //   handleChange=async e=>{
// //     e.persist();
// //     await this.setState({
// //       form:{
// //         ...this.state.form,
// //         [e.target.name]: e.target.value
// //       }
// //     });
// //     console.log(this.state.form);
// //     }

// //     componentDidMount() {
// //     this.peticionGet();
// // }

// //render(){
// //const {form}=this.state;     

// const Configuracion = () => {
//   // const [nombre, setNombre] = useState('')
//   // const [usuario, setUsuario] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [contraseña, setContraseña] = useState('')
//   // const [repetircontraseña, setRepetircontraseña] = useState('')
//   // const [telefono, setTelefono] = useState('')
//     const [nombre, setNombre] = useState("");
//     const [email, setEmail] = useState("");
//     const [contraseña, setContraseña] = useState("");
//     const [confcontraseña, setConfContraseña] = useState("");
//     const [role, setRole] = useState("");
//     const [msg, setMsg] = useState("");
//     const navigate = useNavigate();
  
//     const saveUser = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.post("http://localhost:9000/users", {
//           nombre: nombre,
//           email: email,
//           contraseña: contraseña,
//           confcontraseña: confcontraseña,
//           role: role,
//         });
//         navigate("/users");
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     // modalInsertar=()=>{
//     //           this.setState({modalInsertar: !this.state.modalInsertar});
//     // }


//     return(
//     <>
//     <div className='homeconf'>
//         <Home/> 
//         </div>
//     <div className="containercon">
   
//       {/* <div class="col-9">.col-9</div> */}
//       <div className='cabezeraconfig'>
      
//        <button className="btncon btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}><FontAwesomeIcon icon={faPlus} /></button> 
//       <h5 className="titulocon">Maestro de Ususarios</h5>
//       </div>
//       <div className="row">
//       <div className="col">
//           {/* grilla */}
//           <Table striped bordered hover className='tablacon' size="sm">
//                 <thead >
//                     <tr className='accionesconfig'>
//                         <th>Id</th>
//                         <th>Usuario</th>
//                         <th>Cargo</th>
//                         <th>Acciones</th>
//                         {/*<th>Importe</th>
//                         <th>Acciones</th> */}
//                     </tr>
//                 </thead>
//                   <tbody className="accionescon2">
//                  {this.state.data.map(transporte=>{
//                     return(
//                         <tr>
//                             <td>{transporte.id}</td>
//                             <td>{transporte.usuario}</td>
//                             <td>{transporte.puesto}</td>
//                             <td className=''>
//                             <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
//                                 <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
//                                 {"   "}

//                                 <button className="botonac btn" onClick={()=>{this.seleccionarEmpresa(transporte); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                            
//                             </td>
//                         </tr>
//                     )
//                 })}
//                 </tbody> 
//             </Table>
// <Modal>
//             {/* <Modal isOpen={this.state.modalInsertar} className='modalcombus'>
//             <ModalHeader className='modalhedertrans' style={{display: 'block'}}>
//             <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>X</span> 
//             <h5>Cargar usuarios</h5>
//             </ModalHeader> */}
  
//       {/* dividir la pantalla a la mitad */}
//       <ModalBody>
//       <div  className="conte col-6">
//           <form onSubmit={saveUser} >
//           {/* <form  className="row g-3"> */}
// {/* 
//                <div  className="col-md-2">
//                   <input type="text"  className="usu id form-control" id="id" name="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
//                </div> */}

//               <div className="usuarios">    
//               {/* <input type="text"  className="usua form-control" placeholder='Usuario' name="usuario" id="usuario" 
//               onChange={e => setUsuario(e.target.value)} value={usuario}/> */}
              
//               <input type="Password"  className="pass form-control" placeholder='Contraseña' name="contraseña" id="contraseña" onChange={e => setContraseña(e.target.value)} value={contraseña}/>

//               <input type="Password"  className="pass form-control" placeholder='Contraseña' name="contraseña" id="contraseña" onChange={e => setConfContraseña(e.target.value)} value={confcontraseña}/>
//               </div>
//               <div className="nombreape">
//               <input type="text"  className="usu form-control" placeholder='Nombre' name="nombre" id="nombre" 
//               onChange={e => setNombre(e.target.value)} value={nombre}/>
//               <input type="text"  className="usu form-control" placeholder='Apellido' name="apellido" id="apellido" onChange={this.handleChange} value={form?form.apellido:''}/>
//               </div>
             
//                 <div className="celemail">
//                 {/* <input type="text" className="usu form-control" placeholder="Número de Celular" name="telefono" id="telefono" onChange={e => setTelefono(e.target.value)} value={telefono}/> */}
//                 <input type="text" className="usu form-control" placeholder="Email" name="email" id="email" 
//                 onChange={e => setEmail(e.target.value)} value={email}/>

//                 </div>
//              <div>
//              <select
//                       value={role}
//                       onChange={(e) => setRole(e.target.value)}
//                     >
//                       <option value="admin">Admin</option>
//                       <option value="user">User</option>
//                     </select>
//              </div>
        
            
//               {/* <div className="puesto">
//                     <select className="form-select" placeholder="Puesto" name="puesto" id="puesto" onChange={this.handleChange} value={form?form.puesto:''} >
//                     <option selected>Elige...</option>
//                     <option>Cocinero</option>
//                     <option>Encargado</option>
//                     <option>Administrativo</option>
//                     <option>Capataz</option>
//                   </select>
              
              
//                     <select className="tipubi form-select" placeholder="Ubicación" name="ubicacion" id="ubicacion" onChange={this.handleChange} value={form?form.ubicacion:''}>
//                     <option selected>Elige...</option>
//                     <option>Santa Isabel</option>
//                     <option>Otros</option>
//                     <option>Teode</option>
//                     <option>Venado t</option>
//                   </select>
                  
//               </div>
//               <br/>
//               <br/>
              
//                 <label>Tipo de usuario</label>
//                 <div className="tipusua">
//                 <select className="form-select" placeholder="Puesto" name="tip_usuario" id="tip_usuario" onChange={this.handleChange} value={form?form.tip_usuario:''} >
//                     <option selected>Elige...</option>
//                     <option>Nivel 1 </option>
//                     <option>Nivel 2</option>
//                     <option>Nivel 3</option>
//                   </select>
                 
                  
//                   </div>
//                   <div className="anular form-check col-md-4">
//                     <input className="form-check-input" type="checkbox" name="anular_usuario" id="anular_usuario" onChange={this.handleChange} value={form?form.anular_usuario:''}/>
//                     <label className="anularusu form-check-label" for="gridCheck"> Anula Usuario </label>
//                 </div> */}
//                 </form>
//               </div>
//                 </ModalBody>
           
//                 <ModalFooter>
//                   {/* {this.state.tipoModal==='insertar'?
//                     <button  className="btn btn-success" onClick={()=>this.peticionPost()}>
//                     Insertar
//                   </button> :<button className="btn btn-primary" onClick={()=>this.peticionPut()}>
//                     Actualizar
//                   </button>}
  
//                     <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button> */}
//                     <button type="submit" className="button is-success">
//                     Save
//                   </button>
//                 </ModalFooter>
//                 </Modal>

//               {/* <Modal isOpen={this.state.modalEliminar}>

//             <ModalBody>
//                Estás seguro que deseas eliminar a la pedido: {form && form.id}
//             </ModalBody>
//             <ModalFooter>
//               <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
//               <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
//             </ModalFooter>
//           </Modal> */}
//         {/* </form> */}
        
//       </div>
//     </div> 
// </div>
// </>

//     )
               }

export default Configuracion;






