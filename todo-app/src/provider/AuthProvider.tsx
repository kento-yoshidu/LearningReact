import React, { ReactNode, useState, useEffect } from "react"
import { auth } from  "../service/firebase"
import firebase from "firebase"

type AuthContextProps = {
  user: firebase.User | null
}

export const AuthContext = React.createContext<AuthContextProps>({user: null})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    /* @ts-ignore */
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
