'use client'
import { DndContext, DragEndEvent, rectIntersection} from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useId, useState } from "react"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import test from "node:test"

export const KanbanBoard = () => {

  const [todoItem, setTodos] = useState<Array<Item>>([
    { title: "Todo 1" },
    { title: "Todo 2" },
    { title: "Todo 3" },
  ])


  const [progress, setProgress] = useState<Array<Item>>([
    { title: "progress 1" },
  ])

  const [testable, setTestAble] = useState<Array<Item>>([
    { title: "test 5" },
  ])

  const [done, setDone] = useState<Array<Item>>([
    { title: "done 1" },
    { title: "done 2" },
  ])

  const _onDragEnd = (e: DragEndEvent) => {

    const container = e.over?.id;
    const title = e.active.data.current?.title ?? "";
    const index = e.active.data.current?.index ?? 0;
    const parent = e.active.data.current?.parent ?? "ToDo";


    if (container == 'todo') {
      setTodos([...todoItem, { title: title }])
    } else if (container == 'progress') {
      setProgress([...progress, { title: title }])
    } else if (container == 'test') {
      setTestAble([...testable, { title: title }])
    } else if (container == 'done') {
      setDone([...done, { title: title }])
    }

    if (parent == 'todo') {
      setTodos([
        ...todoItem.slice(0, index),
        ...todoItem.slice(index + 1)
      ])
    } else if (parent === "progress") {
      setProgress([
        ...progress.slice(0, index),
        ...progress.slice(index + 1)
      ])
    } else if (parent == 'test') {
      setTestAble([
        ...testable.slice(0, index),
        ...testable.slice(index + 1),
      ])
    } else if (parent == 'done') {
      setDone([
        ...done.slice(0, index),
        ...done.slice(index + 1)
      ])
    }

    toast({
      title: container as string,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(e.active, null, 2)}</code>
        </pre>
      ),
    })
  }


  const id = useId()

  return (
    <DndContext id={id} onDragEnd={_onDragEnd} collisionDetection={rectIntersection} >
      <Toaster />
      <div className="flex justify-between ml-2 mr-2">
        <KanbanLane title="todo" items={todoItem} />
        <KanbanLane title="progress" items={progress} />
        <KanbanLane title="test" items={testable} />
        <KanbanLane title="done" items={done} />
      </div>
    </DndContext>
  )
}
