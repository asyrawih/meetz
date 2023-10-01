'use client'
import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core"
import { KanbanLane } from "../custom/kanban-lane"

export const KanbanBoard = () => {
  const _onDragEnd = (e: DragEndEvent) => {
    console.log(e)
  }
  return (
    <DndContext
      onDragEnd={_onDragEnd}
      collisionDetection={rectIntersection}
    >
      <div className="flex justify-between ml-2 mr-2">
        <KanbanLane title="todo" />
        <KanbanLane title="development" />
        <KanbanLane title="progress" />
        <KanbanLane title="done" />
      </div>
    </DndContext>
  )
}
