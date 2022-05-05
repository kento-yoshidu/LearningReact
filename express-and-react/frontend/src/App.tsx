import React from 'react'
import { useState,useEffect } from 'react'

const App: React.VFC = () => {
  const [message, setMessage] = useState<string>('');
  const [good, setGood] = useState<string>('')

  useEffect(() =>{
    fetch('/greeting')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))

    fetch('/goodbye')
      .then((res) => res.json())
      .then((data) => setGood(data.message))
  }, [])

  return (
    <>
      <p className="text-white bg-black w-20">Hello world!</p>
      <p>{ message }</p>
      <p>{ good }</p>
    </>
  )
}

export default App
