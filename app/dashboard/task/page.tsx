'use client'
import { CreateTaskForm } from "@/components/custom/CreateTaskForm";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/router";
import { KanbanBoard } from "@/components/section/kanban";

export default function TaskPage() {
  return (
    <div className="ml-2 w-full p-5">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Task</h1>
            <CreateTaskForm />
          </div>
        </CardHeader>
        <CardContent>
          <KanbanBoard />
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}
