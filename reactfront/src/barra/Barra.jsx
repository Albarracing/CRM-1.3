import './home.css'
import 'primeicons/primeicons.css';
import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import {FiSettings} from 'react-icons/fi'
//import {TbMeat, TbGasStation, } from 'react-icons/tb'
//import {MdOutlineEmojiFoodBeverage} from 'react-icons/md'
import {BsTelephone, BsTruck} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineFileDone} from 'react-icons/ai'
import {IoLogOutOutline} from 'react-icons/io5'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { LogOut, reset  } from '../features/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Barra = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[

     
        {
          path:"/usuarios",
          name:"Usuarios",
          icon:<AiOutlineUser/>
      },
      {
          path:"/configuracion",
          name:"Configuracion",
          icon:<FiSettings/>
      },
      {
        path:"/Informes",
        name:"Informes",
        icon:<AiOutlineFileDone/>
      },
      {
        path:"/telefono",
        name:"Teléfono",
        icon:<BsTelephone/>
    },
    {
       
        name:"Cerrar secion",
        icon:<IoLogOutOutline/>,
        button:{logout}
    },
    
  ]
 
  return (
<div>
    <div className='homebarra'>
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
       
            ))
           
        }
    </div>
   <div>
   <button onClick={logout} className="button is-light">
                  Log out 
                </button>
   </div>
</div>
</div>

);
};

export default Barra