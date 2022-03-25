import React, { useState, useEffect, useContext } from "react"

/* @ts-ignore */
import dig from "object-dig"
import { signInWithGoogle } from "../service/firebase"
import { AuthContext } from "../provider/AuthProvider"
import * as Api from "../service/api"

import TodoList from "./todoList"

import {
  TextField,
  Button,
  makeStyles
} from "@material-ui/core"

import type { Todo } from "../../@types/types"

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 40
  },
  form: {

  }
}))

const Dashboard = () => {
  const currentUser = useContext(AuthContext)
  const [inputName, setInputName] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch()
  }, [currentUser])

  const fetch = async () => {
    if (dig(currentUser, "currentUser", "uid")) {
      /* @ts-ignore */
      const data = await Api.initGet(currentUser.currentUser.uid)
      await setTodos(data)
    }
  }

  const post = async () => {
    /* @ts-ignore */
    await Api.AddTodo(inputName, currentUser.currentUser.uid)
    await setInputName("")
    fetch()
  }

  return (
    <div>
      {dig(currentUser, "currentUser", "uid") ? (
        <>
          <form>
            <TextField
              onChange={(e) => setInputName(e.currentTarget.value)}
              placeholder="Todo Name"
              value={inputName}
            />

            <Button
              variant="text"
              type="button"
              onClick={() => post()}
            >
              追加
            </Button>
          </form>

          <TodoList
            todos={todos}
            fetch={fetch}
          />
        </>
      ) : (
        <button onClick={signInWithGoogle}>
          ログイン
        </button>
      )}
    </div>
  )
}

export default Dashboard
