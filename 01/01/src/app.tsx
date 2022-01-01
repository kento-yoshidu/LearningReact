const App = () => {
  const onClickButton = (): void => {
    window.alert();
  }

  const pStyle = {
    color: "blue",
    fontSize: "20px",
  }

  return (
    <>
      <h1 style={{"color": "red"}}>Hello React</h1>
      <p style={pStyle}>hello react</p>

      <button
        onClick={onClickButton}
      >
        ボタン
      </button>
    </>
  )
}

export default App
