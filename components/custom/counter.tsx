"use client";

import { TodoContext } from "@/provider/todo";
import { useContext } from "react";
import { AddCounter } from "./AddCounter";

export const Counter = () => {
  const context = useContext(TodoContext);
  if (!context) return;
  const { todos } = context;

  return (
    <div className="flex flex-col text-2xl">
      {JSON.stringify(todos, null, 2)}
      <AddCounter />
    </div>
  );
};
