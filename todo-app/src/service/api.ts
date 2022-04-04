import firebase from "firebase"
import { db } from "./firebase"

import type { Todo } from "../../@types/types"

export const AddTodo = (content: string, uid: string) => {
  db.collection("todo").add({
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
}

export const initGet = async (uid: string) => {
  const todo = await db
    .collection("todo")
    .orderBy("createdAt", "desc")
    .where("uid", "==", uid)

  return todo.get().then((snapShot) => {
    let todos: Todo[] = []
    snapShot.forEach((doc) => {
      todos.push({
        id: doc.id,
        content: doc.data().content,
        isComplete: doc.data().isComplete
      })
    })
    return todos
  })
}

export const DeleteTodo = async (id: string) => {
  await db.collection("todo").doc(id).delete();
}

export const ToggleComplete = async (id: string) => {
  const todo = await db.collection("todo").doc(id).get();
  db.collection("todo").doc(id).update({
    isComplete: todo?.data()?.isComplete ? false : true
  })
}