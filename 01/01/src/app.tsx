import { useState, useEffect } from "react"
import { ColoredMessage }from "./components/ColoredMessage";
import { CC } from "./components/childrenComponent"

const App = () => {
  const [num, setNum] = useState<number>(0)

  const onClickButton = (): void => {
    setNum((prev) => prev + 1)
    //setNum(num + 1)
  }

  const pStyle = {
    color: "blue",
    fontSize: "20px",
  }

  useEffect(() => {
    console.log(num)
  }, [num])

  return (
    <>
      <p style={pStyle}>hello react</p>

      <button
        onClick={onClickButton}
      >
        ボタン
      </button>

      <ColoredMessage
        color="blue"
        message="Hello World"
      />

      <ColoredMessage
        color="pink"
        message="Hello React"
      />

      <CC>
        <p>This is Children Message</p>
      </CC>

      <p>{num}</p>
    </>
  )
}

export default App
