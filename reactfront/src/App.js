import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import DataTableCrudDemo from './pedidos/ShowPedidos'


import Barra from './barra/Barra'

import Informes from './pedidos/Informes/Informes'

import Login from './login/Login';
import Home from './home/home';
import Configuracion from './configuracion/config'


import Telefono from './pedidos/Telefono/Telefono'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        

        <Route path='/Informes' element={ <Informes/>} />

       
            <Route path='/telefono' element={ <Telefono/>} />

            <Route path='/configuracion' element={ <Configuracion/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
