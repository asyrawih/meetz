'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DndContext, DragEndEvent, useDraggable, useDroppable } from "@dnd-kit/core"
import React, { DragEventHandler, HTMLAttributes, ReactEventHandler, forwardRef, useState } from "react";

export default function TaskPage() {
  const [parent, setParent] = useState(false);
  const handleDragEnd = (evt: DragEndEvent) => {
    console.log(evt)
    if (evt.over && evt.over.id === 'dropable') {
      setParent(true)
    }
  }
  const [isDropped, setIsDropped] = useState(false);

  const draggableMarkup = (
    <Dragable>Drag me</Dragable>
  );

  return (
    <div className="ml-2 w-full p-5">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Task</h1>
          </div>
        </CardHeader>
        <DndContext>
          <CardContent onDragEnd={(event) => handleDragEnd}>
            {!isDropped ? draggableMarkup : null}
            <Dropable>
              {isDropped ? draggableMarkup : 'Drop Here'}
            </Dropable>
          </CardContent>
        </DndContext>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </div>
  )
}


const Dropable = forwardRef
  <HTMLDivElement, HTMLAttributes<HTMLDivElement>>
  (({ children, className, ...props }, ref) => {

    const { isOver, setNodeRef } = useDroppable({
      id: 'dropable'
    })

    const style: React.CSSProperties = {
      color: isOver ? 'green' : undefined
    }

    return (
      <div className="w-[200px] p-3 bg-gray-400" ref={setNodeRef} style={style}>
        {children}
      </div>
    )
  })



const Dragable = forwardRef
  <HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>
  (({ children, className, ...props }, ref) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: "dragable"
    })

    const style: React.CSSProperties = {
      transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    }

    return (
      <Button ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {children}
      </Button>
    )
  })



