import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("max-w-screen-xl flex   mx-auto p-4", className)} {...props} />
  )
})

Container.displayName = "Container"

export { Container }
