'use client'
import React, { createContext, useState } from "react"

// state type for todo
type Todo = {
  title: string
  done: boolean
}

export type TodoContextType = {
  todos: Todo[],
  addTodo: (todo: Todo) => void
}

export const TodoContext = createContext<TodoContextType | null>(null)

type Props = {
  children: React.ReactNode
}

export const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodo] = useState<Todo[]>([])

  const addTodo = (todo: Todo) => {
    setTodo([...todos, todo])
  }

  const values: TodoContextType = {
    todos,
    addTodo
  }

  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  )
}



