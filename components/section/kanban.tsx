'use client'
import { DndContext, DragEndEvent, rectIntersection } from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useId, useState } from "react"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
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

    if (container == 'todo' && parent != 'todo') {
      setTodos([...todoItem, { title: title }])
    } else if (container == 'progress' && parent != 'progress') {
      setProgress([...progress, { title: title }])
    } else if (container == 'test' && parent != 'test') {
      setTestAble([...testable, { title: title }])
    } else if (container == 'done' && parent != 'done') {
      setDone([...done, { title: title }])
    }

    if (parent == 'todo' && container != 'todo') {
      setTodos([
        ...todoItem.slice(0, index),
        ...todoItem.slice(index + 1)
      ])
    } else if (parent === "progress" && container != 'progress') {
      setProgress([
        ...progress.slice(0, index),
        ...progress.slice(index + 1)
      ])
    } else if (parent == 'test' && container != 'test') {
      setTestAble([
        ...testable.slice(0, index),
        ...testable.slice(index + 1),
      ])
    } else if (parent == 'done' && container != 'done') {
      setDone([
        ...done.slice(0, index),
        ...done.slice(index + 1)
      ])
    }

    toast({
      title: container as string,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(e.over, null, 2)}</code>
        </pre>
      ),
    })
  }


  const id = useId()

  return (
    <DndContext id={id} onDragEnd={_onDragEnd} collisionDetection={rectIntersection} modifiers={[restrictToHorizontalAxis]} >
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
