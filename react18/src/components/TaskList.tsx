import { useDeferredValue } from "react"
import type { Task } from "./Transition"

type Props = {
  taskList: Task[]
}

const TaskList = ({ taskList }: Props) => {
  const deferredTaskList = useDeferredValue(taskList)

  return (
    <>
      {deferredTaskList.map((task) => (
        <div key={task.id} style={{ "background": "lavender" }}>
          <p>{task.title}</p>
          <p>{task.assignee}</p>
        </div>
      ))}
    </>
  )
}

export default TaskList
