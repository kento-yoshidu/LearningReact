import React, { useContext } from "react"

import { signInWithGoogle } from "../service/firebase"
import { AuthContext } from "../provider/AuthProvider"

const Header = () => {
  const currentUser = useContext(AuthContext)
  console.log(currentUser.email)
  
  return (
    <header>
      <button onClick={signInWithGoogle}>
        {/*
        {currentUser && (
          <p>{currentUser}でログイン中</p>
        )}
        */}
      </button>
    </header>
  )
}

export default Header

