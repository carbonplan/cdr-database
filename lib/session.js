import { createContext, useContext } from 'react'

const Session = createContext(null)

export const useSession = () => {
  return useContext(Session)
}

export const SessionProvider = ({ session, setSession, children }) => {
  return (
    <Session.Provider value={[session, setSession]}>
      {children}
    </Session.Provider>
  )
}
