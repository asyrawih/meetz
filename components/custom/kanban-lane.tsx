'use client'
import { useDraggable, useDroppable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { Todo } from "../section/kanban"
import { useId, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"

export type Item = {
  title: string
}
type KanbanLaneProps = {
  laneId: string,
  title: string
  items: Array<Todo>
}


export const KanbanLane = ({ laneId, title, items }: KanbanLaneProps) => {
  const { setNodeRef } = useDroppable({
    id: laneId,
    data: {
      title: title,
    }
  })
  return (
    <div ref={setNodeRef} className="flex w-1/3 flex-col min-h-[10rem] mx-2">
      <div className="font-bold inline-flex justify-center bg-gray-400 dark:bg-gray-800 p-3 rounded-t">{title.toUpperCase()}</div>
      <div className="bg-gray-200 dark:bg-gray-900 rounded flex-1 flex-col">
        {items.map(({ title, id }, key) => (
          <KanbanItem title={title} key={key} index={id} parent={laneId} />
        ))}
      </div>
    </div>
  )
}

type KanBanItemProps = {
  title: string
  index: string
  parent: string
}

const KanbanItem = ({ title, index, parent }: KanBanItemProps) => {
  const { isDragging, attributes, transform, listeners, setNodeRef } = useDraggable({
    id: index,
    data: {
      title,
      index,
      parent
    }
  })

  const style = {
    transform: CSS.Translate.toString(transform)
  }

  const [isOpen, setOpen] = useState(false)

  return (
    <div
      onClick={() => !isDragging ? setOpen(!isOpen) : null}
      className="flex dark:bg-gray-600  mx-2 my-2 p-3 rounded border border-black"
      style={{ transform: style.transform }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div
        className="flex flex-col">
        <div className="font-bold">
          {title}
        </div>
        <div className="font-semibold">
          content
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setOpen} >
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              content
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

  )
}
