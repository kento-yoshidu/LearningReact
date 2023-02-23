import React, { useState } from 'react'

const RenderInput = () => {
  const [input, setInput] = useState<string>("")

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="Enter" value={input} onChange={updateValue} />
    </div>
  )
}

export default RenderInput
