import TodoList from "./TodoList"
import Sidebar from "./Sidebar"
import AlbumList from './AlbumList'

const ReactQuery = () => {
  return (
    <div style={{ "display": "flex", "padding": "16px" }}>
      <Sidebar />

      <div style={{ flexGrow: 1 }}>
        <AlbumList />
        <TodoList />
      </div>
    </div>
  )
}

export default ReactQuery
