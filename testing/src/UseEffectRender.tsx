import React, { useEffect, useState } from 'react'

import axios from 'axios'

type User = {
  name: string
  email: string
}

const UseEffectRender = () => {
  const [user, setUser] = useState<User | null>(null)

  const fecthJSON =async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    
    return res.data 
  }

  useEffect(() => {
    const fetchUser =async () => {
      const user = await fecthJSON() 

      setUser(user)
    }

    fetchUser()
  }, [])

  return (
    <div>
      <h1>useEffect</h1>
      {user
        ? (<p>I am {user.name} : {user.email}</p>)
        : null
      }
    </div>
  )
}

export default UseEffectRender
