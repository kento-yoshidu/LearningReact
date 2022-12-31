import { assert } from "console"
import { useState } from "react"
import Avatar from "./Avatar"

type Task = {
  id: number
  title: string
  assignee: string
}

const member = {
  a: "A",
  b: "B",
  c: "C"
}

const generateDummyTasks = (): Task[] => {
  return Array(10000).fill("").map((_, i) => {
    const addedIndex = i + 1

    return {
      id: addedIndex,
      title: `タスク${addedIndex}`,
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c
    }
  })
}

const tasks = generateDummyTasks()

const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState("")
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  const onClickAssignee = (assignee: string) => {
    alert(assignee)
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Avatar onClick={onClickAssignee}>
          {member.a}
        </Avatar>

        <Avatar onClick={onClickAssignee}>
          {member.b}
        </Avatar>

        <Avatar onClick={onClickAssignee}>
          {member.c}
        </Avatar>
      </div>

      {taskList.map((task) => {
        return (
          <div key={task.id} style={{"background": "lavender"}}>
            <p>{task.title}</p>
            <p>{task.assignee}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Transition
