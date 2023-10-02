'use client'
import { KanbanBoard } from "@/components/section/kanban";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import React from "react";

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
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Task</DialogTitle>
                  <DialogDescription>
                    create task after creating of task will automatically will placed on todo board section
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Task
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
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
