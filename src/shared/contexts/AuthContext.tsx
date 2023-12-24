import { createContext, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  iRecoveryPasswordRequest,
  iChildren,
  useAppThemeContext,
  apiAuth,
} from '../../shared'

interface iAuthContextData {
  recoveryPassword: (
    data: iRecoveryPasswordRequest,
    userId: string,
    token: string,
  ) => Promise<void>
}

const AuthContext = createContext({} as iAuthContextData)

export const AuthProvider = ({ children }: iChildren) => {
  const navigate = useNavigate()
  const { setLoading, handleSucess, handleError } = useAppThemeContext()

  const handleRecoveyPassword = useCallback(
    async (data: iRecoveryPasswordRequest, userId: string, token: string) => {
      try {
        setLoading(true)
        await apiAuth.passwordRecovery(data, userId, token)
        handleSucess('Senha alterada com sucesso')
      } catch (e) {
        handleError('Link expirado, solicite um novo link na tela de login!')
      } finally {
        setLoading(false)
        navigate('/')
      }
    },
    [],
  )

  return (
    <AuthContext.Provider
      value={{
        recoveryPassword: handleRecoveyPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
