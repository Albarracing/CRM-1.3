
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
//import { REGISTER } from '../config/routes/paths';
//import { useAuthContext } from './authContext'
import axios from 'axios'
import './Login.css'

const URL = 'http://localhost:9000/api/users'

function Login() {
  //const {login} = useAuthContext()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleInputUserChange(e) {
    setUserName(e.target.value)
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const { data } = await axios.post(`${URL}/user`, {
      'usuario': userName,
      'contraseña': password
    })
    if(!data.length){
      console.log(data)
      setMessage("User doesn't exists")
    }else{
      console.log(data)
      setMessage("Correct")
      //login()
    }
  }



return (
    <div className='login-container'>
      <h1>Sign In</h1>
      <p className='error'>{message}</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={userName} 
          onChange={handleInputUserChange}
          placeholder="Username"
        />
        <input 
          type="password"
          value={password}
          onChange={handleInputPassChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
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

