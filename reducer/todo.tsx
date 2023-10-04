import { Todo } from "@/components/section/kanban";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Dispatch, useEffect, useReducer } from "react";



type TodoState = {
  isLoading: boolean
  todos: Todo[]
}

export const initialState: TodoState = {
  isLoading: false,
  todos: []
}

type Action =
  | { type: "FETCH_TODO" }
  | { type: "FETCH_TODO_SUCCESS", payload: Todo[] }
  | { type: "FETCH_TODO_FAIL", error: string }

export const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case "FETCH_TODO":
      return {
        isLoading: true,
        todos: []
      }
    case "FETCH_TODO_SUCCESS":
      return {
        isLoading: false,
        todos: action.payload
      }
    case "FETCH_TODO_FAIL":
      return {
        isLoading: false,
        todos: []
      }
  }
}


const supabase = createClientComponentClient()
export const useTodoReducer = () => {
  const [state, dispatcher] = useReducer(reducer, initialState)

  const getTodo = async () => {
    const result = await supabase.from('todos').select('*')
    return result.data as Array<Todo>
  }
  // Need Full Fill State Todo
  useEffect(() => {
    dispatcher({ type: "FETCH_TODO" })
    getTodo().then(res => {
      dispatcher({ type: "FETCH_TODO_SUCCESS", payload: res })
    }).catch(err => {
      dispatcher({ type: "FETCH_TODO_FAIL", error: err })
    })
  }, [])

  return {
    state,
    dispatcher
  }
}
