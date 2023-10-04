'use client'

import { useContext, useEffect, useState } from "react"
import { Button } from "../ui/button"
import { AddCounter } from "./AddCounter"
import { useCounter } from "@/hooks/counter"
import { useEnsureTrackRef } from "@livekit/components-react"
import { count } from "console"
import { TodoContext, TodoContextType } from "@/provider/todo"
import { MinusCounter } from "./MinusCounter"

export const Counter = () => {
  const context = useContext(TodoContext)
  if (!context) return
  const { todos } = context

  return (
    <div className="flex flex-col text-2xl">
      {JSON.stringify(todos, null, 2)}
      <AddCounter />
    </div>
  )
}

