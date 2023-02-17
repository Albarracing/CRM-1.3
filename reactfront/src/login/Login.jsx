
import React, { useState, useEffect  } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import Alerta from '../components/alerta.jsx'
import useAuth from '../hooks/useAuth'
import {Link} from 'react-router-dom'
//import { REGISTER } from '../config/routes/paths';
//import { useAuthContext } from './authContext'
import axios from 'axios'
import './Login.css'

//const URL = 'http://localhost:9000/login/autenticar'

//function Login()  {
  //const {login} = useAuthContext()
  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  // const [message, setMessage] = useState('')

  // function handleInputUserChange(e) {
  //   setUserName(e.target.value)
  // }

  // function handleInputPassChange(e) {
  //   setPassword(e.target.value)
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault()
  //   const { data } = await axios.post(`${URL}/user`, {
  //     'usuario': userName,
  //     'contraseña': password
  //   })
  //   if(!data.length){
  //     console.log(data)
  //     setMessage("User doesn't exists")
  //   }else{
  //     console.log(data)
  //     setMessage("Correct")
  //     //login()
  //   }
  // }

const Login = () => {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, contraseña }));
  };

// const [email, setEmail] = useState('')
// const [contraseña, setContraseña] = useState('')
// const [alerta, setAlerta] = useState({})

//  const handleSubmit = async (e) => {
//   e.preventDefault()
//   if([email, contraseña].includes('')){
//     setAlerta({
//       msg:'Todos los compos son obligatorios',
//       errror:true
//     })
//     return
//   }
//   // try{
//   //   const {data} = await URL.post('/login/auntenticar', {email, contraseña})
//   // }

//const {msg} = alerta

return (
    <div className='login-container'>
      <h1>Inicia Sesion</h1>
      <p className='error'></p>

      {/* {msg && <Alerta
          alerta={alerta}

      />} */}
      <form onSubmit={Auth} >
      {isError && <p className="has-text-centered">{message}</p>}
        <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
        />
        <button type="submit">{isLoading ? "Loading..." : "Iniciar"}</button>
      </form>
     {/* <b>or</b>
      <Link to={REGISTER}>Register</Link>*/}
    </div>
  )
}



export default Login;










{/*class Login extends Component {
    constructor() {
        super()
        this.state = {
            usuario: '',
            contraseña: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            usuario: this.state.usuario,
            contraseña: this.state.contraseña
        }
 
        login(user).then(res => {
                this.props.history.push('/profile')
        })
    } 

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">¡Hola, bienvenido!</h1>
                            <div className="form-group">
                                <label htmlFor="usuario">Usuario</label>
                                <input type="text" 
                                className="form-control" 
                                name="usuario" 
                                placeholder="Ingrese su Usuario"
                                value={this.state.usuario}
                                onChange={this.onChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" 
                                className="form-control" 
                                name="contraseña" 
                                placeholder="Ingrese su Contraseña"
                                value={this.state.contraseña}
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">
                                INICIAR SESIÓN
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
*/}

