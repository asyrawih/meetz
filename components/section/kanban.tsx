'use client'
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, rectIntersection } from "@dnd-kit/core"
import { Item, KanbanLane } from "../custom/kanban-lane"
import { useCallback, useEffect, useId, useState } from "react"
import { toast } from "../ui/use-toast"
import { Toaster } from "../ui/toaster"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import test from "node:test"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js"
import { Console, log } from "console"

export type Todo = {
  id: string
  title: string
  description: string
  status: string
}

const supabase = createClientComponentClient()


export const KanbanBoard = () => {
  const [todoItem, setTodos] = useState<Array<Todo>>([])
  const [activeId, setActive] = useState<string | null>(null)

  const getTodo = async () => {
    const result = await supabase.from('todos').select('*')
    return result.data as Array<Todo>
  }

  const updateTask = async ({ id, status }: { id: string, status: string }) => {
    const { data, error } = await supabase.from('todos').update({ status }).eq('id', id).select()
  }

  const handleSupabaseEvent = (some: RealtimePostgresChangesPayload<{}>) => {
    const changedData = some.new as Todo
    if (some.eventType == 'UPDATE') {
      setTodos(prevTodos => {
        const updatedTodos = prevTodos.map(todo => {
          if (todo.id === changedData.id) {
            return changedData;
          }
          return todo;
        });
        return updatedTodos;
      });

      toast({ title: 'NEW UPDATED', description: changedData.title })
    }
    if (some.eventType === 'INSERT') {
      toast({ title: 'NEW INSERTED', description: changedData.title })
      setTodos(pre => [...pre, changedData])
    }
  }

  useEffect(() => {
    getTodo().then(res => setTodos(res))
    supabase.channel('todos').on('postgres_changes', { event: '*', schema: 'public', }, handleSupabaseEvent).subscribe()
    return () => {
      supabase.channel('todos').unsubscribe()
    }
  }, [])


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
