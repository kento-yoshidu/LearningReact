import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type Todo = {
  useId: number
  id: number
  title: string
  completed: boolean
}

const fetchTodos =async () => {
  const result = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  return result.data
}

const TodoList = () => {
  const { data } = useQuery<Todo[]>(['todos'], fetchTodos)

  return (
    <div style={{ height: "300px", "border": "2px solid gray", background: "mistyrose", overflowY: "scroll" }}>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}

export default TodoList
