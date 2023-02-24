import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import DataTableCrudDemo from './pedidos/ShowPedidos'
import Barra from './barra/Barra'
import Informes from './pedidos/Informes/Informes'
import Login from './login/Login';
import Home from './home/home';
import Configuracion from './configuracion/config'
import Telefono from './pedidos/Telefono/Telefono'
import Editusers from './configuracion/editusers';
import Userlist from './configuracion/usuarios';
import {AuthProvider} from './contex/AuthProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AuthProvider>
              <Routes>
              <Route path="/users" element={<Userlist />} />
              <Route path="/users/edit/:id" element={<Editusers />} />
                  <Route path='/Informes' element={ <Informes/>} />
                  <Route path='/telefono' element={ <Telefono/>} />
                  <Route path='/configuracion' element={ <Configuracion/>} />
                  <Route path='/' element={<Login/>}/>
                  <Route path='/home' element={<Home/>}/>
              </Routes>
          </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
