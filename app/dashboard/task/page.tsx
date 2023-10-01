import { KanbanBoard } from "@/components/section/kanban";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import React from "react";

export default function TaskPage() {

  return (
    <div className="ml-2 w-full p-5">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Task</h1>
          </div>
        </CardHeader>
          <KanbanBoard />
        <CardContent>
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </div>
  )
}
