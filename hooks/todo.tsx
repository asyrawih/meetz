import { Todo } from "@/components/section/kanban"
import { toast } from "@/components/ui/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js"
import { useEffect, useMemo, useState } from "react"


const supabase = createClientComponentClient()


export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  // Deep Referance
  const memoizeTodos = useMemo(() => { todos }, [todos])

  const updateTask = async ({ id, status }: { id: string, status: string }) => {
    const { data, error } = await supabase.from('todos').update({ status }).eq('id', id).select()
  }

  const getTodo = async () => {
    const result = await supabase.from('todos').select('*')
    return result.data as Array<Todo>
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

      toast({
        title: "Updated Task",
        description: changedData.title
      })

    }
    if (some.eventType === 'INSERT') {
      setTodos(pre => [...pre, changedData])
      toast({
        title: "New Task",
        description: changedData.title
      })
    }
  }

  useEffect(() => {
    getTodo().then(res => setTodos(res))
    supabase.channel('todos').on('postgres_changes', { event: '*', schema: 'public', }, handleSupabaseEvent).subscribe()
    return () => {
      supabase.channel('todos').unsubscribe()
    }
  }, [memoizeTodos])

  return {
    todos,
    setTodos,
    updateTask
  }
}
