import React, { useState, useEffect, useContext } from "react"
/* @ts-ignore */
import dig from "object-dig"
import { signInWithGoogle, logOut } from "../service/firebase"
import { AuthContext } from "../provider/AuthProvider"
import * as Api from "../service/api"

type Todo = {
  id: string;
  content: string;
  isComplete: boolean
}

const TodoList = ({todos, fetch}: {todos: Todo[], fetch: any}) => {
  const deleteHandle = async (id: string) => {
    await Api.DeleteTodo(id)
    fetch()
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => deleteHandle(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
