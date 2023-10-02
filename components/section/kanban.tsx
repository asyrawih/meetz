'use client'
import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useEffect, useId, useState } from "react"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import test from "node:test"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Todo = {
  id: string
  title: string
  description: string
}

const supabase = createClientComponentClient()

export const KanbanBoard = () => {
  const [todoItem, setTodos] = useState<Array<Todo>>([])

  useEffect(() => {
    const getTodo = async () => {
      const result = await supabase.from('todos').select('*')
      return result.data as Array<Todo>
    }
    getTodo().then(res => setTodos(res))
  }, [])

  const _onDragEnd = (e: DragEndEvent) => {

  }

  const id = useId()
  return (
    <DndContext id={id} onDragEnd={_onDragEnd} collisionDetection={rectIntersection} modifiers={[restrictToHorizontalAxis]} >
      <Toaster />
      <div className="flex justify-between ml-2 mr-2">
        <KanbanLane title="todo" items={todoItem} />
      </div>
    </DndContext>
  )
}
