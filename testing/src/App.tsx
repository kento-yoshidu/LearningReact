import React from 'react';
import RenderInput from "./RenderInput"
import FrameworkList from "./FrameworkList"
import './App.css';

function App() {
  /*追加 output関数*/
  const output = (text: string) => {
    console.log(text);
  };

  const data = [{
    id: 1, item: "React"
  }, {
    id: 2, item: "Rust"
  }, {
    id: 3, item: "AWS"
  }]

  return (
    <div className="App">
      <header className="App-header">
        <RenderInput
          outputConsole={output}
        />

        <FrameworkList
          frameworks={data}
        />

        <FrameworkList />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;