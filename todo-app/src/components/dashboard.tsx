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
import { classicNameResolver } from "typescript"

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 40
  },
  form: {
    width: "100%",
    maxWidth: 360,
    margin: "auto",
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  },
  input: {
    marginRight: 10
  }
}))

const Dashboard = () => {
  const currentUser = useContext(AuthContext)
  const [inputName, setInputName] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  const classes = useStyles()

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
    <div className={classes.root}>
      {dig(currentUser, "currentUser", "uid") ? (
        <>
          <form className={classes.form}>
            <TextField
              onChange={(e) => setInputName(e.currentTarget.value)}
              placeholder="Todo Name"
              value={inputName}
              className={classes.input}
            />

            <Button
              variant="contained"
              type="button"
              color="primary"
              size="small"
              onClick={() => post()}
              disabled={!inputName}
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
