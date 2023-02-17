import {useContext} from 'react'
import AuthContex from '../contex/AuthProvider.jsx'

const useAuth = () => {
    return useContext(AuthContex)
}

export default useAuth