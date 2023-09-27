import { HTMLAttributes, forwardRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { cn } from "@/lib/utils"


export const Sidebar = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className }, ref) => {
  return (
    <aside className="hidden md:flex flex-col w-1/6">
      <Card className={cn("rounded-t-none h-screen", className)}>
        {children}
      </Card>
    </aside>
  )
})

export const SidebarHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <CardHeader ref={ref} className={className} {...props}>
      {children}
    </CardHeader>
  )
})


export const SidebarContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <CardContent>
      <div className={className} ref={ref} {...props}>{children}</div>
    </CardContent>
  )
})
