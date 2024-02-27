import React, { createContext, useContext, ReactNode, useState } from 'react'
import { IUserSignInResponse } from '@/src/interfaces/requests/user/index'
import { AxiosResponse } from 'axios'
import { User } from '@/src/interfaces/index'

interface AuthContextProps {
  isAuthenticated: boolean | undefined
  token: string | undefined
  user: User | undefined
  login: (response: AxiosResponse<IUserSignInResponse>) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!(
      localStorage.getItem('user_id') && localStorage.getItem('user_id') !== ''
    )
  )

  const [user, setUser] = useState<User | undefined>(
    localStorage.getItem('user') && localStorage.getItem('user') !== ''
      ? JSON.parse(localStorage.getItem('user') as string)
      : undefined
  )

  const [token, setToken] = useState<string | undefined>(
    localStorage.getItem('access_token') &&
      localStorage.getItem('access_token') !== ''
      ? (localStorage.getItem('access_token') as string)
      : undefined
  )

  const login = async (apiResponse: AxiosResponse<IUserSignInResponse>) => {
    const responseData = apiResponse.data
    const token = apiResponse.headers.authorization.split(' ')[1]
    localStorage.setItem('user', JSON.stringify(responseData.user))
    localStorage.setItem('user_id', `${responseData.user.id}`)
    localStorage.setItem('access_token', token)
    // localStorage.setItem('refresh_token', responseData.headers.authorization);
    setIsAuthenticated(true)
    setUser(responseData.user)
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('user_id')
    localStorage.removeItem('access_token')
    setIsAuthenticated(false)
    setUser(undefined)
    setToken(undefined)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, token } as any}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth, type User }
