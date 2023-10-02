'use client'
import { CreateTaskForm } from "@/components/custom/CreateTaskForm";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { useRouter } from "next/router";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { KanbanBoard } from "@/components/section/kanban";
import { Button } from "@/components/ui/button";

export default function TaskPage() {
  return (
    <div className="ml-2 w-full p-5">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Task</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Create Task</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create Task</DialogTitle>
                  <DialogDescription>
                    create task after creating of task will automatically will placed on todo board section
                  </DialogDescription>
                </DialogHeader>
                <CreateTaskForm />
              </DialogContent>
            </Dialog>
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
