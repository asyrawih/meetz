import { useEffect, useMemo, useState } from "react"
import { createContext } from "vm"

const counterProvider = createContext()

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const add = () => {
    console.log(counter, 'test')
    setCounter(count => count + 1)
  }

  const getTodo = () => {
  }

  return {
    counter,
    setCounter,
    add
  }
}
