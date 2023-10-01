'use client'
import { useDraggable, useDroppable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

export type Item = {
  title: string
}
type KanbanLaneProps = {
  title: string
  items: Array<Item>
}


export const KanbanLane = ({ title, items }: KanbanLaneProps) => {
  const { setNodeRef } = useDroppable({
    id: title,
    data: {
      title: title,
    }
  })
  return (
    <div ref={setNodeRef} className="flex w-1/3 flex-col min-h-[10rem] mx-2">
      <div className="font-bold inline-flex justify-center bg-gray-400 dark:bg-gray-800 p-3 rounded-t">{title.toUpperCase()}</div>
      <div className="bg-gray-200 dark:bg-gray-900 rounded flex-1 flex-col">
        {items.map(({ title: cardTitle }, key) => (
          <KanbanItem title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </div>
    </div>
  )
}

type KanBanItemProps = {
  title: string
  index: number
  parent: string
}

const KanbanItem = ({ title, index, parent }: KanBanItemProps) => {
  const { attributes, transform, listeners, setNodeRef } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent
    }
  })

  const style = {
    transform: CSS.Translate.toString(transform)
  }

  return (
    <div
      className="flex dark:bg-gray-600 mx-2 my-2 p-3 rounded border border-black"
      id="kanban_item"
      style={{ transform: style.transform }}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      {title}
    </div>
  )
}
