import React, { useContext } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core"
/* @ts-ignore */
import dig from "object-dig"

import { signInWithGoogle, logOut } from "../service/firebase"
import { AuthContext } from "../provider/AuthProvider"

const useStyles = makeStyles(() => ({
  toolbar:{
    justifyContent: "space-between"
  },
  button: {
    color: "#fff",
  }
}))

const Header = () => {
  const currentUser = useContext(AuthContext)

  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          TodoApp
        </Typography>

        {dig(currentUser, "currentUser", "uid") ? (
          <Button
            className={classes.button}
            onClick={logOut}
          >
            ログアウト
          </Button>
        ) : (
          <Button
            className={classes.button}
            onClick={signInWithGoogle}
          >
            ログイン
          </Button>
        )}
      </Toolbar>

    </AppBar>
  )
}

export default Header
