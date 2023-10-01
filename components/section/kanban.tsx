'use client'
import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useId, useState } from "react"

export const KanbanBoard = () => {
  const _onDragEnd = (e: DragEndEvent) => {
  }

  const [todoItem, setTodos] = useState<Array<Item>>([
    { title: "Todo 1" },
    { title: "Todo 2" },
    { title: "Todo 3" },
  ])


  const [progress, setProgress] = useState<Array<Item>>([
    { title: "progress 1" },
    { title: "progress 2" },
    { title: "progress 4" },
    { title: "progress 5" },
  ])


  const [done, setDone] = useState<Array<Item>>([
    { title: "done 1" },
    { title: "done 2" },
    { title: "done 4" },
    { title: "done 5" },
  ])


  const id = useId()

  return (
    <DndContext id={id} onDragEnd={_onDragEnd} collisionDetection={rectIntersection} >
      <div className="flex justify-between ml-2 mr-2">
        <KanbanLane title="todo" items={todoItem} />
        <KanbanLane title="progress" items={progress} />
        <KanbanLane title="done" items={done} />
      </div>
    </DndContext>
  )
}
