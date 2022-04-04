import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox
} from "@material-ui/core"
// import { FormControlLabel } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

import DeleteIcon from "@material-ui/icons/Delete"

import * as Api from "../service/api"

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 360,
    margin: "auto"
  },
  ul: {
    padding: 0,
    listStyle: "none"
  }
}))

type Todo = {
  id: string;
  content: string;
  isComplete: boolean
}

const TodoList = ({todos, fetch}: {todos: Todo[], fetch: any}) => {
  const classes = useStyles()

  const deleteHandle = async (id: string) => {
    await Api.DeleteTodo(id)
    fetch()
  }

  const checkHandle = async (id: string) => {
    await Api.ToggleComplete(id)
    fetch()
  }

  return (
    <div className={classes.root}>
      <ul className={classes.ul}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemIcon>
              <Checkbox
                onChange={() => checkHandle(todo.id)}
              />
            </ListItemIcon>
            <ListItemText
              primary={todo.content}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => deleteHandle(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
