import { useCounter } from "@/hooks/counter"
import { Button } from "../ui/button"
import { ChangeEvent, ChangeEventHandler, useContext, useRef, useState } from "react"
import { TodoContext } from "@/provider/todo"
import { Input } from "../ui/input"

export const AddCounter = () => {
  const [todo, setTodo] = useState("")
  const context = useContext(TodoContext)
  if (!context) return
  const { addTodo } = context


  const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value)
  }

  const add = () => {
    addTodo({ title: todo, done: false })
    setTodo('')
  }

  return (
    <div className="flex flex-col">
      <Input type="text" onChange={handlerInput} value={todo} />
      <Button onClick={add}>Add</Button>
    </div>
  )
}
