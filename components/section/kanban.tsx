'use client'
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, PointerSensor, rectIntersection, useSensor, useSensors } from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useCallback, useEffect, useId, useState } from "react"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js"
import { useTodos } from "@/hooks/todo"

export type Todo = {
  id: string
  title: string
  description: string
  status: string
}

const supabase = createClientComponentClient()


export const KanbanBoard = () => {
  const [activeId, setActive] = useState<string | null>(null)
  const { todos: todoItem, updateTask } = useTodos()

  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 100, tolerance: 100 }
    }))


  const _onDragEnd = async (e: DragEndEvent) => {
    if (e.over?.id == e.active.data.current?.parent) return
    await updateTask({ id: activeId as string, status: e.over?.id as string })
  }

  const _onDragStart = (e: DragStartEvent) => {
    // just set active id
    setActive(e.active.id as string)
  }

  const _onDragOver = (e: DragOverEvent) => {
    console.log(e)
  }

  const id = useId()
  return (
    <DndContext id={id}
      onDragStart={_onDragStart}
      onDragOver={_onDragOver}
      onDragEnd={_onDragEnd}
      sensors={sensor}
      collisionDetection={rectIntersection}
    >
      <Toaster />
      <div className="flex justify-between ml-2 mr-2">
        <KanbanLane laneId="todo" title="todo" items={todoItem.filter((prev) => prev.status == 'todo')} />
        <KanbanLane laneId="progress" title="progress" items={todoItem.filter((prev) => prev.status == 'progress')} />
        <KanbanLane laneId="test" title="test" items={todoItem.filter((prev) => prev.status == 'test')} />
        <KanbanLane laneId="done" title="done" items={todoItem.filter((prev) => prev.status == 'done')} />
      </div>
    </DndContext>
  )
}
