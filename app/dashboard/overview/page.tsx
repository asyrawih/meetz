import { Counter } from "@/components/custom/counter";
import { TodoContextProvider } from "@/provider/todo";

export default function OverviewPage() {
  return (
    <>
      <TodoContextProvider>
        <Counter />
      </TodoContextProvider>
    </>
  )
}
