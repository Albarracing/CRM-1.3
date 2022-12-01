import { getConnection } from '../database/db'

const getUsers = async(req, res)=> {

  try {
    const connection = await getConnection()
    const result = await connection.query('SELECT id, usuario, contraseña FROM usuarios')
    res.json(result)
  } catch (error) {
    res.status(500) // server error
    res.send(error.message)
  }

}

const addUser = async(req, res)=> {

  try {
    const { usuario, contraseña } = req.body
    const connection = await getConnection()
//revisar esta linea
    const result = await connection.query('SELECT COUNT(*) as userCount FROM usuarios WHERE usuario=?', usuario)

    if(result[0].userCount == 0){

      const user = { usuario, contraseña }
      await connection.query('INSERT INTO usuarios SET ?', user)
      res.json({ message: 'User registered' })

    } else {
      res.json(result[0].userCount)
    }

  } catch (error) {
    res.status(500) // server error
    res.send(error.message)
  }

}

const getUser = async(req, res)=> {

  try {
    const { usuario, contraseña } = req.body
    const connection = await getConnection()

    const result = await connection.query('SELECT usuario, contraseña FROM usuarios WHERE usuario=? AND contraseña=?', [usuario, contraseña])
    res.json(result)

  } catch (error) {
    res.status(500) // server error
    res.send(error.message)
  }

}



export const methods = {
  getUsers,
  addUser,
  getUser
}