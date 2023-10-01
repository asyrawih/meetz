'use client'

import { useDroppable } from "@dnd-kit/core"

export type KanbanLaneProps = {
  title: string
}

export const KanbanLane = ({ title }: KanbanLaneProps) => {
  const { setNodeRef } = useDroppable({
    id: title
  })
  return (
    <div className="flex w-1/3 flex-col min-h-[10rem] mx-2">
      <div className="font-bold inline-flex justify-center bg-gray-400 dark:bg-gray-800 p-3 rounded-t">{title.toUpperCase()}</div>
      <div ref={setNodeRef} className="bg-gray-200 dark:bg-gray-900 rounded flex-1 flex-col">

      </div>
    </div>
  )
}
