
import { useCounter } from "@/hooks/counter"
import { Button } from "../ui/button"
import { useContext } from "react"
import { TodoContext } from "@/provider/todo"

export const MinusCounter = () => {
  const context = useContext(TodoContext)
  if (!context) return // guard clouse
  const { minus } = context

  return (
    <div className="flex flex-col">
      <Button onClick={minus}>Minus</Button>
    </div>
  )
}
