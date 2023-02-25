import React, { useState } from 'react'

const RenderInput = ({ outputConsole }: any) => {
  const [input, setInput] = useState<string>("")

  const outputValue = () => {
    if (input) {
      outputConsole(input)
    }
  }

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />

      <button onClick={outputValue}>Console</button>
    </div>
  )
}

export default RenderInput
