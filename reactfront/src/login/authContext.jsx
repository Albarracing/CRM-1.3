
import { createContext, useState, useCallback, useMemo, useContext } from "react";


const MY_AUTH_APP = 'MY_AUTH_APP_1'

// Objeto con el provider
export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  // Obtenemos la sesion del usuario almacenada en Local Storage
  const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false)

  const login = useCallback(function(){
    window.localStorage.setItem(MY_AUTH_APP, 'true')
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(function(){
    window.localStorage.removeItem(MY_AUTH_APP)
    setIsAuthenticated(false)
  }, [])

  const value = useMemo(()=>({
    login,
    logout,
    isAuthenticated
  }), [login, logout, isAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}