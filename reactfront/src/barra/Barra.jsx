import './home.css'
import 'primeicons/primeicons.css';
import React, { useState } from 'react';
import {
    
    FaBars,
    FaThList
}from "react-icons/fa";
import {FiSettings} from 'react-icons/fi'
import {TbMeat, TbGasStation, } from 'react-icons/tb'
import {MdOutlineEmojiFoodBeverage} from 'react-icons/md'
import {BsTelephone, BsTruck} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineFileDone} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Barra = () =>{
    
  
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[

      {
          path:"/",
          name:"Usuarios",
          icon:<AiOutlineUser/>,
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
   
</div>
</div>

);
};

export default Barra