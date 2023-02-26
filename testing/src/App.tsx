import React from 'react'
import RenderInput from "./RenderInput"
import FrameworkList from "./FrameworkList"
import UseEffectRender from './UseEffectRender'
import MockServer from './MockServer'

function App() {
  /*追加 output関数*/
  const output = (text: string) => {
    console.log(text)
  }

  const data = [{
    id: 1, item: "React"
  }, {
    id: 2, item: "Rust"
  }, {
    id: 3, item: "AWS"
  }]

  return (
    <div className="App">
      <RenderInput
        outputConsole={output}
      />

      <hr />

      <FrameworkList
        frameworks={data}
      />

      <hr />

      <UseEffectRender />

      <hr />

      <MockServer />

    </div>
  )
}

export default App
